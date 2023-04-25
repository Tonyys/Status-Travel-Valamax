import {variables} from "../vars.js";

export const fixedHeader = () => {

    const header = variables.headerWrapper;
    const secondSectionAnim = document.querySelector('.second-section-js');
    const fixedDesk = secondSectionAnim?.offsetTop - 150
    const fixedMob = secondSectionAnim?.offsetTop - 100

    let scrollPos = 0;
    const func = () => {
        if(header){
            let windowTop = window.pageYOffset;
            let headerHeight = header.offsetHeight;

            if(header.classList.contains('fixed')){
                if(windowTop > scrollPos){
                    if(windowTop > headerHeight){
                        header.style.transition = 'top .3s';
                        header.style.top = '-200px';
                    } else {
                        header.style.transition = 'none';
                        header.style.top = `-${windowTop}px`;
                    }
                } else {
                    header.style.transition = 'top .3s';
                    header.style.top = '';
                }
                scrollPos = windowTop;
            }

        }
    }

        window.addEventListener('scroll', () => {
            if (window.innerWidth > 1023 && fixedDesk) {
                if (window.scrollY > fixedDesk) {
                    func();
                }
            }
            if (window.innerWidth <= 1023 && fixedMob) {
                if (window.scrollY > fixedMob) {
                    func();
                }
            }
        });
}