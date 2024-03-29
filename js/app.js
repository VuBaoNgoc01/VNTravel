//Parallax Scrolling Effect

let bg = document.getElementById("bg");
let moutain1 = document.getElementById("moutain1");
let person = document.getElementById("person");
let title = document.getElementById("title");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  moutain1.style.marginTop = value * -0.2 + "px";
  moutain1.style.scale = 1 + value * 0.0002;
  person.style.top = value * 0.5 + "px";
  person.style.left = value * -0.5 + "px";
  person.style.scale = 1 - value * 0.0002;
  title.style.top = value * 0.5 + "px";
});

//Active menu
const menuChild = document.getElementById("menu-child");
const boxMenu = document.getElementById("box-menu");
const boxLogo = document.getElementById("box-logo");

menuChild.addEventListener("click", () => {
  boxMenu.classList.toggle("active");
  menuChild.classList.toggle("active");
  boxLogo.classList.toggle("active");
});

//Active btn-CTA-search

const ctaSearch = document.getElementById("cta-search");
const formSearch = document.getElementById("wrap-form");

ctaSearch.addEventListener("click", () => {
  ctaSearch.classList.toggle("active");
  formSearch.classList.toggle("active");
});

//Active btn-CTA-Userlog

const ctaUser = document.getElementById("cta-user");
const formLog = document.getElementById("form-log");

ctaUser.addEventListener("click", () => {
  ctaUser.classList.toggle("active");
  formLog.classList.toggle("active");
  changerForm.classList.remove("change");
});

// const changerForm = document.querySelector(".user-log");
// const registerLink = document.querySelector(".register-link");
// const loginLink = document.querySelector(".login-link");

// registerLink.addEventListener("click", () => {
//     changerForm.classList.add("change");
// })

// loginLink.addEventListener("click", () => {
//     changerForm.classList.remove("change");
// })

//flatpickr date-time

flatpickr("input[type=date]", {
  minDate: "today",
  maxDate: new Date().fp_incr(30),
  allowInput: true,
});

//Scroll

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".box-navbar").addClass("scrollMenu");
    } else {
      $(".box-navbar").removeClass("scrollMenu");
    }

    if (this.scrollY > 200) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });

  $("#scroll-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

//Animation load

AOS.init();

//Scroll reveal

const sr = ScrollReveal({
  distance: "80px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal("#person", { delay: 50, origin: "left" });
sr.reveal("#title", { delay: 50, origin: "top" });
sr.reveal("#wrap-form", { delay: 50, origin: "top" });

// <<<>>>

// $('.slider-home').slick({
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     dots: false,
//     autoplay: true,
//     arrows: true,
//     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
//     nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
//     responsive: [
//         {
//             breakpoint: 1250,
//             settings: {
//                 slidesToShow: 1,
//             }
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//                 dots: true,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//                 dots: true,
//             }
//         }
//     ]
// });

$(".slide-tour").slick({
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  dots: false,
  autoplay: false,
  centerMode: true,
  centerPadding: "0px",
  cssEase: "linear",
  swipeToSlide: true,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".list-cmt").slick({
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  cssEase: "linear",
  dots: true,
  fade: true,
  autoplay: true,
  arrows: false,
  swipeToSlide: true,
  pauseOnHover: true,
  //prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
  //nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
});

$(".slide-blog").slick({
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  dots: false,
  autoplay: false,
  cssEase: "linear",
  swipeToSlide: true,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".slide-partner").slick({
  infinite: true,
  slidesToShow: 5,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 0,
  focusOnSelect: true,
  cssEase: "linear",
  swipeToSlide: true,
  dots: false,
  arrows: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        focusOnSelect: true,
        cssEase: "linear",
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        focusOnSelect: true,
        cssEase: "linear",
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        speed: 500,
        swipeToSlide: true,
        autoplaySpeed: 0,
      },
    },
  ],
});
