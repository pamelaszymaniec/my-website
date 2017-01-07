var $animationElements = $('.wow'),
 $window = $(window);
var pageWidth = $(window).width();

function checkIfInView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function() {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top - 50;
        var elementBottomPosition = (elementTopPosition + elementHeight);
        if ( pageWidth > 800) {
            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        }
        else {
            $element.addClass('in-view');
        }
    });
}

$window.on('scroll resize', checkIfInView);
$window.trigger('scroll');