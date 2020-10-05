window.onload = init;

function init() {
    initSlider();
}

function initSlider() {
    var slider = tns({
        container: '.slider',
        items: 3,
        slideBy: 1,
        autoplay: false,
        nav: false,
        lazyload: true,
        touch: true,
        mouseDrag: true
    });
}