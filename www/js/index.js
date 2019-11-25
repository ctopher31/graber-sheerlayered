/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Device Ready');
    }
};

app.initialize();
FastClick.attach(document.body);
(function(window, document, $, undefined) {
    'use strict';

    // Browser Testing add status bar to android
    /*// !!!!!*** Remove before building app ***!!!!!!!
    var ioscript = document.createElement('script');
    ioscript.src = '/socket.io/socket.io.js';
    document.body.appendChild(ioscript);
    setTimeout(function () {
        var socket = io();
        socket.on('reload', function () {
            console.log('Reload page emitted');
            setTimeout(function () {
                window.location.reload(true);
            }, 300);
        });
    }, 300);

    console.log('Display: ' + window.devicePixelRatio);
    var el = document.querySelector('.app');
    var appHeight = el.clientHeight;
    var deviceHeight = $(window).height();
    var appWidth = el.clientWidth;
    var deviceWidth = $(window).width();
    //console.log(appWidth);
    //console.log(deviceWidth);
    //console.log(appHeight);
    //console.log(deviceHeight);
    // */
    // !!!!!*** Remove before building app ***!!!!!!!

    var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false);
    var android = (navigator.userAgent.match(/Android/i) ? true : false);
    if (android) {
        $('.app').addClass('android');

        // Browser Testing add status bar to android
        /*// !!!!!*** Remove before building app ***!!!!!!!

        var div = document.createElement('div');
        div.className = 'statusbar';
        var navbar = document.querySelector('.navbar');
        var parent = navbar.parentNode;
        parent.insertBefore(div, navbar);
        // */
        // !!!!!*** Remove before building app ***!!!!!!!

        //$(window).on('resize', function(event) {
            //deviceHeight = window.outerHeight;
            //alert('resize : deviceHeight = ' + deviceHeight);
            //console.log('resize : deviceHeight = ' + deviceHeight);
        //});
    }
    if (iOS) {
        $('.app').addClass('ios');
        //$(window).on('orientationchange', function(event) {
            //deviceHeight = $(window).height();
            //alert('orientationchange : deviceHeight = ' + deviceHeight);
            //console.log('orientationchange : deviceHeight = ' + deviceHeight);
        //});
    }

    $(document).on('click', '.media-menu', function (event) {
        event.preventDefault();
        if ($('.media .filter-section').hasClass('media-filter-section')) {
            $('.media .filter-section').removeClass('media-filter-section');
            $('.arrow-icon').attr('src', 'assets/images/icons/down-arrow.svg');
        } else {
            $('.media .filter-section').addClass('media-filter-section');
            $('.arrow-icon').attr('src', 'assets/images/icons/up-arrow.svg');
        }
    });
    $(document).on('click', '.collections-menu', function (event) {
        event.preventDefault();
        if ($('.collections .filter-section').hasClass('collections-filter-section')) {
            $('.collections .filter-section').removeClass('collections-filter-section');
            $('.arrow-icon').attr('src', 'assets/images/icons/down-arrow.svg');
        } else {
            $('.collections .filter-section').addClass('collections-filter-section');
            $('.arrow-icon').attr('src', 'assets/images/icons/up-arrow.svg');
        }
    });
    /*$(document).on('click', '.action-section', function (event) {
        event.preventDefault();
        if ($(this).hasClass('hidetarget')) {
            $(this).removeClass('hidetarget');
        } else {
            $(this).addClass('hidetarget');
        }
    });*/

    // Product Catalog page 3 -- Wide Shot CGI Sheer Shades demonstration video
    $(document).on('click', '#play-wide-shot, #wide-shot-video', function (event) {
        var wideShotVideo = document.getElementById('wide-shot-video');
        wideShotVideo.play();
    });
    $('#wide-shot-video').on('play', function (event) {
        $('.ios #play-wide-shot').css({'display': 'none'});
    });
    $('#wide-shot-video').on('pause', function (event) {
        $('.ios #play-wide-shot').css({'display': 'inline-block'});
    });
    $('#wide-shot-video').on('ended', function (event) {
        $('.ios #play-wide-shot').css({'display': 'inline-block'});
        this.load();
    });

    // Product Catalog page 3 -- Close Shot CGI Sheer Shades demonstration video
    $(document).on('click', '#play-close-shot, #close-shot-video', function (event) {
        var closeShotVideo = document.getElementById('close-shot-video');
        closeShotVideo.play();
    });
    $('#close-shot-video').on('play', function (event) {
        $('.ios #play-close-shot').css({'display': 'none'});
    });
    $('#close-shot-video').on('pause', function (event) {
        $('.ios #play-close-shot').css({'display': 'inline-block'});
    });
    $('#close-shot-video').on('ended', function (event) {
        $('.ios #play-close-shot').css({'display': 'inline-block'});
        this.load();
    });

    // Video Insert Page in Product Catalog and Media Library
    // Sheer and Layered Shades Inpirational Video
    $(document).on('click', '#play-sheer-layered, #sheer-layered-video', function (event) {
        var sheerLayeredVideo = document.getElementById('sheer-layered-video');
        sheerLayeredVideo.play();
    });
    $('#sheer-layered-video').on('play', function (event) {
        $('.ios #play-sheer-layered').css({'display': 'none'});
    });
    $('#sheer-layered-video').on('pause', function (event) {
        $('.ios #play-sheer-layered').css({'display': 'inline-block'});
    });
    $('#sheer-layered-video').on('ended', function (event) {
        $('.ios #play-sheer-layered').css({'display': 'inline-block'});
        this.load();
    });

    // Media Library -- 3 Shot CGI Sheer Shades demonstration video
    $(document).on('click', '#play-3-shot, #3-shot-video', function (event) {
        var threeShotVideo = document.getElementById('3-shot-video');
        threeShotVideo.play();
    });
    $('#3-shot-video').on('play', function (event) {
        $('.ios #play-3-shot').css({'display': 'none'});
    });
    $('#3-shot-video').on('pause', function (event) {
        $('.ios #play-3-shot').css({'display': 'inline-block'});
    });
    $('#3-shot-video').on('ended', function (event) {
        $('.ios #play-3-shot').css({'display': 'inline-block'});
        this.load();
    });

})(window, document, jQuery);
