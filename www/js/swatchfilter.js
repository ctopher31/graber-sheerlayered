(function(window, document, $, undefined) {
    'use strict';

    function buildProductFilterDeck(selector, attribute) {
        var defaultProductFilterDeck = ['Sheer Shades', 'Layered Shades'];
        var newProductFilterDeck = [];
        var productFilter = document.querySelector(selector).getAttribute(attribute);
        //console.log(productFilter);
        if (productFilter !== 'all' && defaultProductFilterDeck.indexOf(productFilter) > -1) {
            newProductFilterDeck.push(productFilter);
        } else if (productFilter === 'all') {
            newProductFilterDeck = defaultProductFilterDeck;
        } else {
            newProductFilterDeck = [];
        }
        return newProductFilterDeck;
    }

    function buildLightFilterDeck(selector, attribute) {
        var defaultLightFilterDeck = ['Sheer', 'Light Filtering', 'Room Darkening'];
        var newLightFilterDeck = [];
        var lightFilter = document.querySelector(selector).getAttribute(attribute);
        //console.log(lightFilter);
        if (lightFilter !== 'all' && defaultLightFilterDeck.indexOf(lightFilter) > -1) {
            newLightFilterDeck.push(lightFilter);
        } else if (lightFilter === 'all') {
            newLightFilterDeck = defaultLightFilterDeck;
        } else {
            newLightFilterDeck = [];
        }
        return newLightFilterDeck;
    }

    function buildDeck(selector, productAttribute, lightAttribute) {
        var deck = [];
        deck.push(selector);
        var productDeck = buildProductFilterDeck(selector, productAttribute);
        deck.push(productDeck);
        var lightDeck = buildLightFilterDeck(selector, lightAttribute);
        deck.push(lightDeck);
        //var sortValue = document.querySelector(selector).getAttribute(sortAttribute);
        //deck.push(sortValue);
        return deck;
    }

    function buildSwatches(swatchData, deck) {
        var filteredDeck = [];
        //console.log(deck);
        $.each(swatchData, function(key, val) {
            if (deck[1].indexOf(val.productLine) > -1) {
                if (deck[2].indexOf(val.lightControl) > -1) {
                    filteredDeck.push(val);
                }
            }
        });
        //console.log(filteredDeck);
        /*if (deck[3] === 'color') {
            filteredDeck.sort(function(a, b) {
                if(a.colorRange < b.colorRange) return -1;
                if(a.colorRange > b.colorRange) return 1;
                return 0;
            });
        } else {
            filteredDeck.sort(function(a, b) {
                if(a.collection < b.collection) return -1;
                if(a.collection > b.collection) return 1;
                return 0;
            });
        }*/
        $.each(filteredDeck, function(key, val) {
            var swatch = '<a class="swatch-link" data-swatch-id="' + val.colorNumber + '" data-swatch-collection="' + val.collectionName + '" data-swatch-name="' + val.colorName + '" data-swatch-number="' + val.colorNumber + '" href="assets/swatches/sheer-layered/' + val.imageSource + '"><img src="assets/swatches/sheer-layered/' + val.thumbSource + '" alt="Swatch">' + val.collectionName + ' : ' + val.colorName + '</a>';
            $('.swatch-thumbs').append(swatch);
        });
        //console.log($('.swatch-thumbs').children());
    }

    //console.log(SwatchData);
    buildSwatches(SwatchData,buildDeck('.swatch-thumbs-container', 'data-product-deck', 'data-light-deck'));

    $(document).on('click', '#product-filter-list > .filter-item > a', function() {
        event.preventDefault();
        var selected = this.getAttribute('data-option-value');
        document.querySelector('.swatch-thumbs-container').setAttribute('data-product-deck',selected);
        document.querySelectorAll('#product-filter-list > .filter-item > a.selected')[0].classList.remove('selected');
        this.classList.add('selected');
        document.querySelector('.swatch-thumbs').innerHTML = '';
        buildSwatches(SwatchData,buildDeck('.swatch-thumbs-container', 'data-product-deck', 'data-light-deck'));
    });
    $(document).on('click', '#light-filter-list > .filter-item > a', function() {
        event.preventDefault();
        var selected = this.getAttribute('data-option-value');
        document.querySelector('.swatch-thumbs-container').setAttribute('data-light-deck',selected);
        document.querySelectorAll('#light-filter-list > .filter-item > a.selected')[0].classList.remove('selected');
        this.classList.add('selected');
        document.querySelector('.swatch-thumbs').innerHTML = '';
        buildSwatches(SwatchData,buildDeck('.swatch-thumbs-container', 'data-product-deck', 'data-light-deck'));
    });

    var Swatch = {
        swatchID: 'id',
        getSource: function(el) {
            if ($(el).attr('data-swatch-id')) {
                this.swatchID = $(el).attr('data-swatch-id');
                //console.log('ID: ' + this.swatchID);
                $.each(SwatchData, function(key, val) {
                    if (Swatch.swatchID.indexOf(val.colorNumber) > -1) {
                        var colorList = val.colorNumberList.split(',');
                        var newList = colorList[0];
                        if (colorList[1]) {
                            newList = newList + '<br>' + colorList[1];
                            if (colorList[2]) {
                                newList = newList + '<br>' + colorList[2];
                            }
                        }
                        $('#swatch').attr('src', 'assets/swatches/sheer-layered/' + val.imageSource);
                        $('.product-line').text(val.productLine);
                        $('.collection-name').text(val.collectionName);
                        $('.color-name').text(val.colorName);
                        $('.color-number').html(newList);
                        $('.light-control').text(val.lightControl);
                    }
                });
            }
        }
    }

    $(document).on('click', '.swatch-link', function (event) {
        event.preventDefault();
        Swatch.getSource(event.target.parentElement);
        setTimeout(function() {
            $('.modal-section').css({'display': 'block', 'height': '100%'});
            $('.close-button').css({'visibility': 'visible'});
        }, 300);
        return false;
    });
    $(document).on('click', '.close-button', function (event) {
        //console.log('Type: ' + event.type);
        //console.log('Target: ' + event.target);
        if ($('.modal-section').css('display') === 'block') {
            setTimeout(function() {
                $('.modal-section').css({'display': 'none', 'height': '0%'});
                $('.close-button').css({'visibility': 'hidden'});
            }, 300);
        }
        return true;
    });
    $(document).on('click', '.modal-section', function (event) {
        //console.log('Type: ' + event.type);
        //console.log('Target: ' + event.target);
        if ($('.modal-section').css('display') === 'block') {
            setTimeout(function() {
                $('.modal-section').css({'display': 'none', 'height': '0%'});
                $('.close-button').css({'visibility': 'hidden'});
            }, 300);
        }
        return true;
    });
    $(document).on('click', '.modal-container', function (event) {
        event.preventDefault();
        return false;
    });

})(window, document, jQuery);
