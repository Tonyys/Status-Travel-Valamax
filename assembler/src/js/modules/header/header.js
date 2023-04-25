import {variables} from "../vars.js";

export const headerBurger = ()=> {
    const burgerBtn = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile__menu');

    let counter = 0;

    burgerBtn.addEventListener('click',()=> {
        if (counter == 0) {
            mobileMenu.classList.add('active')
            burgerBtn.classList.add('active')
            variables.header.classList.add('active')
            variables.bodySite.classList.add('overflow-hidden')
            counter++
        } else {
            mobileMenu.classList.remove('active')
            burgerBtn.classList.remove('active')
            variables.bodySite.classList.remove('overflow-hidden')
            setTimeout(()=> {
                variables.header.classList.remove('active')
            },500)
            counter = 0
        }
    })
}