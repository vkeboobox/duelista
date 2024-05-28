// image slider start

var imageSwiper = new Swiper(".mySwiper-1", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});
// image slider end

// video slider part start
const clip = document.querySelectorAll(".clip");
var videoSwiper = new Swiper(".mySwiper-2", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 27,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: () => {
	  clip[0].muted = true;
      clip[0].play();
    },
  },
});
videoSwiper.on('transitionEnd', () => {
  if (clip[videoSwiper.realIndex].paused) {
      clip[videoSwiper.realIndex].play();
  }
      
  for (let i = 0; i < clip.length; i++) {
    if (i !== videoSwiper.realIndex) {
      clip[i].pause();
    }
  }
});
// video slider part end

const sliders = [imageSwiper, videoSwiper];
for (const slider of sliders) {
  slider.on('click', () => {
    const clickedSlide = slider.clickedSlide?.className;
    if (!clickedSlide) {
      return;
    }

    if (clickedSlide.includes('swiper-slide-prev')) {
      slider.slidePrev();
    } else if (clickedSlide.includes('swiper-slide-next')) {
      slider.slideNext();
    }
  })
}

// sticky top start
$(document).ready(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".sticky_menu");

    if (scrolling >= 10) {
      sticky.addClass("menu_bg");
    } else {
      sticky.removeClass("menu_bg");
    }
  });
});
// sticky top end

// wow js start
new WOW().init();
// wow js end

// preloader start
const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hidden");
});
// preloader end
