export const servicesSlider = ()=> {

    const $slider = $('.services__slider');

    function toggleServicesSlider() {
        if ($(window).width() > 1023) {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        } else {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    centerMode: true,
                    centerPadding: 0,
                    // infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    arrows: true,
                    prevArrow: '.services-prev-arrow',
                    nextArrow: '.services-next-arrow',
                });
            }
        }
    }

    toggleServicesSlider();

    $(window).resize(function() {
        toggleServicesSlider();
    });

}