/**
 * Created by Pamela on 2016-12-13.
 */
var slider = (function () {
    //initialise variables
    var slides = $('.slides'),
        description = $('.portfolio-description'),
        items = slides.children('div'),
        itemsText = description.children('div'),
        length = items.length,
        current = 0,
        isAnimating = false,
        navprev = $('.sl-prev'),
        navnext = $('.sl-next'),


        init = function () {
            var currentItem = items.eq(current),
                currentItemText = itemsText.eq(current),

                //set slide position
                initCSS = {
                    top: 0,
                    zIndex: 99
                },
                initTextCSS = {
                    // position: abosolute,
                    // right: '-150px',
                    top: 0,
                    zIndex: 99,
                    paddingTop: '100px',
                    paddingRight: '0px'
                    // paddingLeft: '50px'
                };

            //display slide in view
                   currentItem.css(initCSS);
            currentItemText.css(initTextCSS);
            initEvents();
            updateNavImg();

            //move slides out of view except current slide
            items.each(function (index, item) {
                if (index > 0) {
                    $(item).css({
                        top: '-100%',
                        zIndex: 1
                    });
                }
            });

            itemsText.each(function (index, item) {
                if (index > 0) {
                    $(item).css({
                        right: '-600%',
                        zIndex: 1

                    });
                }
            });
        },
        //click events
        initEvents = function () {
            navprev.on('click', function (e) {
                e.preventDefault();
                slide('prev');
                updateNavImg();

            });

            navnext.on('click', function (e) {
                e.preventDefault();
                slide('next');
                updateNavImg();

            });
        },
        //update background of navigation buttons
        updateNavImg = function () {
            //previous background
            var configPrev = ( current > 0 ) ? items.eq(current - 1).css('background-image') : items.eq(length - 1).css('background-image');
            //next background
            var configNext = ( current < length - 1) ? items.eq(current + 1).css('background-image') : items.eq(0).css('background-image');
            navprev.css('background-image', configPrev);
            navnext.css('background-image', configNext);


        },


        //animating slides
        slide = function (dir) {
            isAnimating = true;
            var currentItem = items.eq(current),
                currentItemText = itemsText.eq(current);
            //if direction is forward
            if (dir === 'next') {
                //if next slide is not the last, move to next slide
                //when last slide reached, go back to first slide
                ( current < length - 1 ) ? ++current : current = 0;
            }
            //if direction is backward
            else if (dir === 'prev') {
                //if slide is not the first, move back to previous slide
                //is first slide reached, move to last slide
                ( current > 0 ) ? --current : current = length - 1;
            }

            var newItem = items.eq(current),
                newItemText = itemsText.eq(current);
            newItem.css({
                //when ascending order, move slide down, otherwise move slide up
                top: ( dir === 'next' ) ? '-100%' : '100%',
                zIndex: 99
            });

            var setTimeout = function () {
                currentItem.addClass('move').css({
                    top: ( dir === 'next' ) ? '100%' : '-100%',
                    zIndex: 2
                });

                // move new slide to main view
                newItem.addClass('move').css('top', 0);


                //text disappear
                currentItemText.addClass('move').animate({
                    top: 0,
                    zIndex: -66,
                    color: 'white',
                    // right: ( dir === 'next' ) ? '-100%' : '-100%',
                    opacity: ( dir === 'next' ) ? '0' : '0'

                });

                // move new text to main view
                newItemText.addClass('move').css({
                    paddingLeft: '15px',
                    paddingRight: '0',
                    paddingTop: '100px',
                    top: 0,
                    right: 0,
                    opacity: 1

                });


            };
            setTimeout();
        };

    return {init: init}; // returns a new Object instance with the init field set to the value of the init variable

})();

//call function
$(function () {
    slider.init();
});
