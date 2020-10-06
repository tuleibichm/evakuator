window.onload = init;

function init() {
    initSlider();
}

function initSlider() {
    var slider = tns({
        container: '.slider',
        items: 1,
        slideBy: 1,
        autoplay: false,
        nav: false,
        lazyload: true,
        touch: true,
        mouseDrag: true,
        responsive: {
            568: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });
}