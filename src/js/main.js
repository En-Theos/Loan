import Slider from "./modules/slider/slider";
import SliderMini from "./modules/slider/sliderMini";
import VideoPlayer from "./modules/playerVideo";
import Difference from "./modules/difference";
import Forms from "./modules/forms";
import Spoiler from "./modules/spoiler";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
   if (document.URL.includes('modules')) {
      new Slider({
         selTape: ".moduleapp",
         selSlides: ".moduleapp > .module",
         selButtonNext: ".nextmodule",
         selButtonPrev: ".prevmodule",
         selZeroSlide: ".sidecontrol > a"
      }).initializationEvent();

      new VideoPlayer('.overlay', '.play', '.module__video-item').initializationEvent();
      new Spoiler(".module__info-show .plus", ".msg").initializationEvent();
      new Download(".download").initializationEvent();
   } else {
      new Slider({
         selTape: ".page",
         selSlides: ".page > div",
         selButtonNext: ".next",
         selZeroSlide: ".sidecontrol > a"
      }).initializationEvent();
   
      new SliderMini({
         selTape: ".showup__content-slider .tape",
         selSlides: ".showup__content-slider .tape .card",
         selButtonNext: ".showup__next",
         selButtonPrev: ".showup__prev",
         direction: "horizontal"
      }).initializationEvent();
   
      new SliderMini({
         selTape: ".modules__content-slider .tape",
         selSlides: ".modules__content-slider .tape .card",
         selButtonNext: ".modules__info-btns .slick-next",
         selButtonPrev: ".modules__info-btns .slick-prev",
         direction: "horizontal",
         autoSwitching: true
      }).initializationEvent();
   
      new SliderMini({
         selTape: ".feed__slider .tape",
         selSlides: ".feed__slider .tape .feed__item",
         selButtonNext: ".feed__slider .slick-next",
         selButtonPrev: ".feed__slider .slick-prev",
         direction: "horizontal",
         activeClass: "feed__item-active"
      }).initializationEvent();
   
      new VideoPlayer('.overlay', '.play').initializationEvent();
      new Difference([".officerold", ".officernew"], ".officer__card-item").initializationEvent();
      new Forms(".join__evolution form", "http://localhost:3000/helps").initializationEvent();
      new Forms(".schedule__form form", "http://localhost:3000/schedule").initializationEvent();
   }
});