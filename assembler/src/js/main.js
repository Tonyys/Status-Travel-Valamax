import {headerBurger} from "./modules/header/header.js";
import {servicesSlider} from "./modules/sliders/services.js";
import {advantagesSlider} from "./modules/sliders/advantages.js";
import {popThanks} from "./modules/pop-up/pop-thanks.js";
import {animFirstSection} from "./modules/animation/gsap.js";
import {fixedHeader} from "./modules/header/header-fixed.js";
import {popCarsSlider} from "./modules/pop-up/pop-cars.js";
import {reviewsSlider} from "./modules/sliders/reviews.js";
import {anchorScroll} from "./modules/animation/anchor-scroll.js";
import {detectDevice} from "./modules/detect-device.js";

document.addEventListener("DOMContentLoaded", function (event) {
    detectDevice();
    headerBurger();
    fixedHeader();

    anchorScroll();

    animFirstSection();

    servicesSlider();
    advantagesSlider();
    reviewsSlider();

    popCarsSlider();
    popThanks();
});
