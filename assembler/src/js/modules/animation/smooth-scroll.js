export function smoothScrollTo(scrollHeight, animationSpeed) {
    var startY = window.pageYOffset || document.documentElement.scrollTop;
    var currentTime = 0;
    var increment = 20;

    function animateScroll() {
        currentTime += increment;
        var val = easeInOutQuad(currentTime, startY, scrollHeight, animationSpeed * 1000);
        window.scrollTo(0, val);
        if (currentTime < animationSpeed * 1000) {
            requestAnimationFrame(animateScroll);
        }
    }

    animateScroll();

}
function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}
