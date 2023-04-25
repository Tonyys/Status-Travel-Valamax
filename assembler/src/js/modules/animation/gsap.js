import {smoothScrollTo} from "./smooth-scroll.js";

export const animFirstSection = ()=> {
    const heroArrow = document.querySelector('.hero-arrow')
    const firstSection = document.querySelector('.first-section-js')
    const secondSection = document.querySelector('.second-section-js')
    const secondSectionServ = document.querySelector('section.hero + p')

    heroArrow?.addEventListener('click',()=> {
        if (secondSection) {
            const resultDesk = secondSection.offsetTop - window.scrollY - 150
            const resultMob = secondSection.offsetTop - window.scrollY - 100
            const animationSpeed = 1.5;
            if (window.innerWidth > 1023) {
                smoothScrollTo(resultDesk, animationSpeed);
            } else {
                smoothScrollTo(resultMob, animationSpeed);
            }
        }
        if (secondSectionServ) {
            const resultDesk = secondSectionServ.offsetTop - window.scrollY - 150
            const resultMob = secondSectionServ.offsetTop - window.scrollY - 100
            const animationSpeed = 1.5;
            if (window.innerWidth > 1023) {
                smoothScrollTo(resultDesk, animationSpeed);
            } else {
                smoothScrollTo(resultMob, animationSpeed);
            }
        }
    })

    const gsapAnim = ()=> {


        if (firstSection) {
            gsap.to(firstSection, {
                scrollTrigger: {
                    trigger: firstSection,
                    start: "top",
                    end: ()=> window.innerHeight,
                    scrub: true,
                },
                y: '-110vh',
            });
        }

        if (secondSection) {
            gsap.to(secondSection, {
                scrollTrigger: {
                    trigger: secondSection,
                    start: "top bottom",
                    end: ()=> window.innerHeight,
                    scrub: true,
                },
                opacity: 1,
            });
        }

        if (secondSectionServ) {
            gsap.to(secondSectionServ, {
                scrollTrigger: {
                    trigger: secondSectionServ,
                    start: "top bottom",
                    end: ()=> window.innerHeight,
                    scrub: true,
                },
                opacity: 1,
            });
        }

    }

    gsapAnim()
}