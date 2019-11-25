'use strict';

var gulp = require('gulp');
// dev server with auto reload on change using socket.io
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    paths: {
        css: './www/css/**/*.css',
        sass: './www/css/sass/**/*.scss',
        js: './www/js/**/*.js',
        html: './www/**/*.html'
    }
}

gulp.task('server', function () {
    server.listen(3000, function () {
        console.log('listening on port %d', port);
    });
    app.use(express.static(__dirname + '/www'));
});

var buildSass = function () {
    return gulp.src(config.paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/css'));
}

gulp.task('default',['server'], function () {
    buildSass();
    var sassWatcher = gulp.watch([config.paths.sass]);
    sassWatcher.on('change', function () {
        return buildSass();
    });
    var reloadWatcher = gulp.watch([config.paths.js, config.paths.html, config.paths.css]);
    //   send event emitter data to browser to initiate window.location.reload(true);
    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
        reloadWatcher.on('change', function () {
            socket.broadcast.emit('reload');
        });
    });
});
