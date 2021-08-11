import Slider from "./modules/slider/slider";
import SliderMini from "./modules/slider/sliderMini";
import VideoPlayer from "./modules/playerVideo";

window.addEventListener('DOMContentLoaded', () => {
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
});