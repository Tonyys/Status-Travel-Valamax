import {variables} from "./vars.js";

export const detectDevice = ()=> {
    if(navigator != undefined && navigator.userAgentData != undefined) {
        if (navigator.userAgentData.mobile === true) {
            variables.bodySite.classList.add('mobile-device')
            variables.bodySite.classList.remove('desktop-device')
        } else {
            variables.bodySite.classList.remove('mobile-device')
            variables.bodySite.classList.add('desktop-device')
        }
    }
    onresize = (event) => {
        if(navigator != undefined && navigator.userAgentData != undefined) {
            if (navigator.userAgentData.mobile === true) {
                variables.bodySite.classList.add('mobile-device')
                variables.bodySite.classList.remove('desktop-device')
            } else {
                variables.bodySite.classList.remove('mobile-device')
                variables.bodySite.classList.add('desktop-device')
            }
        }
    };
}