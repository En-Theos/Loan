import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
   new Slider(".page", ".page > div", ".next", ".sidecontrol > a").initializationEvent();
});