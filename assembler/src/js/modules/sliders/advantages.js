export const advantagesSlider = ()=> {

    const $slider = $('.advantages__slider');

    function toggleAdvantagesSlider() {
        if ($(window).width() > 1023) {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        } else {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                rows: 1,
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                centerMode: false,
                            }
                        },
                    ],
                    centerMode: true,
                    centerPadding: 0,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    slidesPerRow: 1,
                    mobileFirst: true,
                    arrows: true,
                    adaptiveHeight: true,
                    prevArrow: '.advantages-prev-arrow',
                    nextArrow: '.advantages-next-arrow',
                });
            }
        }
    }

    toggleAdvantagesSlider();

    $(window).resize(function() {
        toggleAdvantagesSlider();
    });

}