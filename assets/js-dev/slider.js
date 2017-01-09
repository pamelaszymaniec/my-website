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

                //set slide position
                initCSS = {
                    top: 0,
                    zIndex: 99
                };


            //display slide in view
            currentItem.css(initCSS);
            initEvents();
            updateNavImg();
            updateText();

            //move slides out of view except current slide
            items.each(function (index, item) {
                if (index > 0) {
                    $(item).css({
                        top: '-100%',
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
                updateText();

            });

            navnext.on('click', function (e) {
                e.preventDefault();
                slide('next');
                updateNavImg();
                updateText();

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
        updateText = function () {
            if (current === 0) {
                itemsText.eq(current).css('display', 'block');
                itemsText.eq(1).css('display', 'none');
                itemsText.eq(2).css('display', 'none');
            } else if (current === 1) {
                itemsText.eq(current).css('display', 'block');
                itemsText.eq(0).css('display', 'none');
                itemsText.eq(2).css('display', 'none');
            } else if (current === 2) {
                itemsText.eq(current).css('display', 'block');
                itemsText.eq(0).css('display', 'none');
                itemsText.eq(1).css('display', 'none');
            }

        },


        //animating slides
        slide = function (dir) {
            isAnimating = true;
            var currentItem = items.eq(current),
                currentItemText = itemsText.eq(current);
            //if direction is forward
            if (dir === 'next') {
                console.log(current + 'forward');
                //if next slide is not the last, move to next slide
                //when last slide reached, go back to first slide
                ( current < length - 1 ) ? ++current : current = 0;
            }
            //if direction is backward
            else if (dir === 'prev') {
                console.log(current + 'backward');
                //if slide is not the first, move back to previous slide
                //is first slide reached, move to last slide
                ( current > 0 ) ? --current : current = length - 1;
            }

            var newItem = items.eq(current);
            newItem.css({
                //when ascending order, move slide down, otherwise move slide up
                top: ( dir === 'next' ) ? '-100%' : '100%',
                zIndex: 99
            });
            // newItemText.css({
            //     //when ascending order, move slide down, otherwise move slide up
            //     display: 'block'
            // });

            var setTimeout = function () {
                currentItem.addClass('move').css({
                    top: ( dir === 'next' ) ? '100%' : '-100%',
                    zIndex: 2
                });

                // move new slide to main view
                newItem.addClass('move').css('top', 0);


                //text disappear


                // move new text to main view


            };
            setTimeout();
        };

    return {init: init}; // returns a new Object instance with the init field set to the value of the init variable

})();

//call function
$(function () {
    slider.init();
});
