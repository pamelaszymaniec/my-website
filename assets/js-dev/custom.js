$(document).ready(function () {

    var header = $('header');
    var pageWidth = $(window).width();

    $('body').on('click', '.scroller', function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 100
        }, 800, 'easeOutQuart');
    });

    //functions to run on scroll
    $(window).scroll(function(){
        //only run parallax if on desktop screen
        //(mobile parallax interferes with content consumption)
        if ( pageWidth > 800 ) {
            headerAnimate();
            parallax();
        }
    });

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.has-parallax').css(
            'top', (scrolled*0.3)+'px'
        );
    }


    function headerAnimate(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 20) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }



});