$('.carouselSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    mouseDrag: false,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.bannerCarousel').owlCarousel({
    loop: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
            width: 100
        },
    }
})
$('.feedback__carousel').owlCarousel({
    loop: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
    }
})
$('.clients__carousel').owlCarousel({
    loop: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 2
        },
        800: {
            items: 3
        },
        1200: {
            items: 6
        }
    }
})