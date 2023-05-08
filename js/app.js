//Parallax Scrolling Effect

let bg = document.getElementById("bg");
let sea = document.getElementById("sea");
let moutain1 = document.getElementById("moutain1");
let moutain2 = document.getElementById("moutain2");
let moutain3 = document.getElementById("moutain3");
let moutain4 = document.getElementById("moutain4");
let moutain5 = document.getElementById("moutain5");
let boat = document.getElementById("boat");
let cloud1 = document.getElementById("cloud1");
let cloud2 = document.getElementById("cloud2");
let title = document.getElementById("title");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moutain1.style.top = value * 0.5 + 'px';
    moutain2.style.top = value * 0.5 + 'px';
    moutain3.style.top = value * 0.5 + 'px';
    moutain4.style.left = value * -0.5 + 'px';
    moutain5.style.left = value * 0.5 + 'px';
    boat.style.top = value * 0.5 + 'px';
    boat.style.left = value * 2.5 + 'px';
    title.style.marginTop = value * 1.5 + 'px';
});

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.box-navbar').addClass("scrollMenu")
        } else {
            $('.box-navbar').removeClass("scrollMenu")
        }

        if (this.scrollY > 200) {
            $('.scroll-to-top').addClass("active")
        } else {
            $('.scroll-to-top').removeClass("active")
        }
    });

    $("#scroll-to-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
});

$('.slider-home').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: false,
    autoplay: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
});

