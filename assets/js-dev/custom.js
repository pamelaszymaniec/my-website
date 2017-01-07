$(document).ready(function () {
    console.log("%c%s", "font-size: 20px;", "What's up? ❤❤❤️");
    var header = $('header');
    var pageWidth = $(window).width();

    $('body').on('click', '.scroller', function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 84
        }, 800, 'easeOutQuart');
    });

    //functions to run on scroll
    $(window).scroll(function(){
        if ( pageWidth > 800 ) {
            headerAnimate();
            parallax();
        }
    });
    function checkTheHeader() {
        var offset = $(header).offset();
        if (offset.top > 20) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }

    checkTheHeader();

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.has-parallax').css(
            'bottom', (scrolled*0.6)+ (-400) + 'px'
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


    // menu-trigger
    var $menu = $('#menu');

    $(document).mouseup(function (e) {

        if (!$menu.is(e.target) &&
            $menu.has(e.target).length === 0) {
            $menu.removeClass('active');
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 991) {
            $('#menu').removeClass('active');
        }
    });

    $('.menu-trigger a').click(function () {

        $('#menu').toggleClass('active');
    });

    $menu.find('li>a').click(function () {
        $('#menu').removeClass('active');
    });


});