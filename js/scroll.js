$(window).scroll(function() {
    var sticky = $('.headerFixed'),
        scroll = $(window).scrollTop();
    if (scroll >= 40) {
        sticky.addClass('headerScroll');
    } else {
        sticky.removeClass('headerScroll');
    }
});

$(document).ready(function() {
    $("header a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav #navbarMassive ul li");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};