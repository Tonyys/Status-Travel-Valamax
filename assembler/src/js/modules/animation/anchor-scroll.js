import {smoothScrollTo} from "./smooth-scroll.js";

export const anchorScroll = ()=> {
    const anchorBtns = document.querySelectorAll('.anchor-scroll-js')
    const anchorMenusBtns = document.querySelectorAll('.anchor-scroll-menu-js > a')

    console.log(window.location.hash)

    if (window.location.hash) {
        console.log('yes hash')
        const hashElement = document.querySelector(window.location.hash)
        console.log(hashElement)
        smoothScrollTo(hashElement.offsetTop,2)
    } else {
        console.log('no hash')
    }

    anchorBtns.forEach((item)=> {

        item.addEventListener('click',(e)=> {
            e.preventDefault()
            const itemHref = item.getAttribute('href')
            const itemTarget = document.querySelector(itemHref)
            const itemOffset = itemTarget.offsetTop
            const result = itemOffset - window.scrollY

            smoothScrollTo(result,2)
        })
    })
    anchorMenusBtns.forEach((item)=> {

        item.addEventListener('click',(e)=> {
            e.preventDefault()
            const itemHref = item.getAttribute('href')
            const itemTarget = document.querySelector(itemHref)
            console.log(itemHref)
            if (itemTarget == null) {
                const url = window.location.href;
                console.log(url)
                if(url.includes('/uk/')){
                    window.location.href = window.location.origin + '/uk/'+itemHref
                } else {
                    window.location.href = window.location.origin + '/'+itemHref
                }
            } else {
                console.log(itemTarget)
                const itemOffset = itemTarget.offsetTop
                const result = itemOffset - window.scrollY
                smoothScrollTo(result,2)
            }
        })
    })
}