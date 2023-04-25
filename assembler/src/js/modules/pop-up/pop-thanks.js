import {variables} from "../vars.js";

export const popThanks = ()=> {
    const closeBtn = document.querySelector('.pop__thanks-close svg');
    const popUp = document.querySelector('.pop__thanks');

    if (popUp) {
        document.addEventListener('wpcf7mailsent',(e)=> {
            popUp.classList.add('active')
            variables.bodySite.classList.add('overflow-hidden')
        })

        popUp.addEventListener('click',(e)=> {
            if (e.target === closeBtn) {
                popUp.classList.remove('active')
                variables.bodySite.classList.remove('overflow-hidden')
            } else if (e.target === e.currentTarget) {
                popUp.classList.remove('active')
                variables.bodySite.classList.remove('overflow-hidden')
            }
        })
    }
}