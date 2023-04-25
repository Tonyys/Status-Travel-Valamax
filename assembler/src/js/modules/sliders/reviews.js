export const reviewsSlider = ()=> {

    const $slider = $('.reviews__slider');

    function toggleServicesSlider() {

        if (!$slider.hasClass('slick-initialized')) {
            $slider.slick({
                // centerMode: true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                adaptiveHeight: true,
                prevArrow: '.reviews-prev-arrow',
                nextArrow: '.reviews-next-arrow',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            infinite: false,
                            prevArrow: '.reviews__desk-prev-arrow',
                            nextArrow: '.reviews__desk-next-arrow',
                        }
                    },
                ]
            });
        }
    }

    toggleServicesSlider();

    $(window).resize(function() {
        toggleServicesSlider();
    });


}