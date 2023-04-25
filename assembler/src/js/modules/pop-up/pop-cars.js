import {variables} from "../vars.js";

export const popCarsSlider = ()=> {
    const btnsOpen = document.querySelectorAll('.pop__cars-open');
    const btnsClose = document.querySelectorAll('.pop__cars-close');
    const allPopItems = document.querySelectorAll('.pop__cars-item');
    const popCars = document.querySelector('.pop__cars');

    if (btnsOpen) {
        btnsOpen.forEach((btnOpen,index)=> {
            btnOpen.addEventListener('click',(e)=> {
                e.preventDefault()
                allPopItems[index].classList.add('opened')
                popCars.classList.add('active')
                variables.bodySite.classList.add('overflow-hidden')
            })
        })
    }

    if (popCars) {
        popCars.addEventListener('click',(e)=> {
            document.querySelectorAll('.pop__cars-wrapper').forEach((wrapper)=> {
                if (e.target === wrapper) {
                    popCars.classList.remove('active')
                    variables.bodySite.classList.remove('overflow-hidden')
                    allPopItems.forEach((items)=> {
                        items.classList.remove('opened')
                    })
                }
            })
        })
    }

    if (btnsClose) {
        btnsClose.forEach((btnClose,index)=> {
            btnClose.addEventListener('click',(e)=> {
                e.preventDefault()
                allPopItems[index].classList.remove('opened')
                popCars.classList.remove('active')
                variables.bodySite.classList.remove('overflow-hidden')
            })
        })
    }

    $('.pop__cars-item').each(function () {
        const currentSlider = $(this).find('.pop__cars-slider')
        const currentPrev = $(this).find('.pop__cars-prev-arrow')
        const currentNext = $(this).find('.pop__cars-next-arrow')

        if (!currentSlider.hasClass('slick-initialized')) {

            currentSlider.slick({
                centerMode: true,
                centerPadding: 0,
                // infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                prevArrow: currentPrev,
                nextArrow: currentNext,
            });
        }
    })
}