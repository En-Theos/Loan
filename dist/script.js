/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider */ "./src/js/modules/slider/slider.js");
/* harmony import */ var _modules_slider_sliderMini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/sliderMini */ "./src/js/modules/slider/sliderMini.js");
/* harmony import */ var _modules_playerVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playerVideo */ "./src/js/modules/playerVideo.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");




window.addEventListener('DOMContentLoaded', () => {
  new _modules_slider_slider__WEBPACK_IMPORTED_MODULE_0__["default"]({
    selTape: ".page",
    selSlides: ".page > div",
    selButtonNext: ".next",
    selZeroSlide: ".sidecontrol > a"
  }).initializationEvent();
  new _modules_slider_sliderMini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    selTape: ".showup__content-slider .tape",
    selSlides: ".showup__content-slider .tape .card",
    selButtonNext: ".showup__next",
    selButtonPrev: ".showup__prev",
    direction: "horizontal"
  }).initializationEvent();
  new _modules_slider_sliderMini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    selTape: ".modules__content-slider .tape",
    selSlides: ".modules__content-slider .tape .card",
    selButtonNext: ".modules__info-btns .slick-next",
    selButtonPrev: ".modules__info-btns .slick-prev",
    direction: "horizontal",
    autoSwitching: true
  }).initializationEvent();
  new _modules_slider_sliderMini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    selTape: ".feed__slider .tape",
    selSlides: ".feed__slider .tape .feed__item",
    selButtonNext: ".feed__slider .slick-next",
    selButtonPrev: ".feed__slider .slick-prev",
    direction: "horizontal",
    activeClass: "feed__item-active"
  }).initializationEvent();
  new _modules_playerVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.overlay', '.play').initializationEvent();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]([".officerold", ".officernew"], ".officer__card-item").initializationEvent();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(selArrFunctionalBlock, selAllUsItems) {
    this.arrFunctionalBlock = selArrFunctionalBlock;
    this.selAllUsItems = selAllUsItems;
    this.initializationElement();
  }

  initializationElement() {
    this.localBtnItem = [];
    this.localUsItems = [];
    this.arrCounters = [];
    this.index = 0;
    this.arrFunctionalBlock.forEach(selBlock => {
      this.functionalBlock = document.querySelector(selBlock);
      this.localUsItems[this.index] = this.functionalBlock.querySelectorAll(this.selAllUsItems);
      this.localBtnItem[this.index] = this.localUsItems[this.index][this.localUsItems[this.index].length - 1];
      this.arrCounters[this.index] = 0;
      this.localUsItems[this.index].forEach(items => {
        if (items != this.localBtnItem[this.index]) {
          items.style.display = "none";
          items.classList.remove("fadeIn");
        }
      });
      this.index++;
    });
  }

  initializationEvent() {
    this.localBtnItem.forEach((button, i) => {
      button.addEventListener('click', event => {
        if (event.target.classList.contains("plus") || event.target.closest(".plus")) {
          if (this.localUsItems[i][this.arrCounters[i]] != button) {
            this.localUsItems[i][this.arrCounters[i]].style.display = "flex";
            this.localUsItems[i][this.arrCounters[i]].classList.add("animated", "fadeIn");
            this.arrCounters[i]++;

            if (this.localUsItems[i][this.arrCounters[i]] == this.localUsItems[i][this.localUsItems[i].length - 1]) {
              button.remove();
            }
          }
        }
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/playerVideo.js":
/*!***************************************!*\
  !*** ./src/js/modules/playerVideo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerVideo; });
class PlayerVideo {
  constructor(seModal, selButtons) {
    this.modal = document.querySelector(seModal);
    this.buttons = document.querySelectorAll(selButtons);
  }

  initializationVideo() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  initializationEvent() {
    this.initializationVideo();
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.player = new YT.Player('frame', {
          height: '100%',
          width: '100%',
          videoId: button.getAttribute("data-url")
        });
        this.modal.style.display = "flex";
      });
    });
    this.modal.addEventListener('click', event => {
      if (event.target == this.modal || event.target.classList.contains("close")) {
        this.modal.style.display = "none";
        this.modal.querySelector("iframe").remove();
        const div = document.createElement("div");
        div.id = "frame";
        this.modal.querySelector(".video").prepend(div);
      }
    });
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    selTape,
    selSlides,
    selButtonNext,
    selButtonPrev,
    selZeroSlide,
    direction = "vertical",
    leafedSlide = 1,
    activeClass = "card-active",
    autoSwitching = false
  }) {
    this.tape = document.querySelector(selTape);
    this.slides = document.querySelectorAll(selSlides);
    this.buttonsNext = document.querySelectorAll(selButtonNext);
    this.buttonPrev = document.querySelectorAll(selButtonPrev);
    this.logo = document.querySelectorAll(selZeroSlide);
    this.direction = direction;
    this.leafedSlide = leafedSlide;
    this.activeClass = activeClass;
    this.autoSwitching = autoSwitching;
    this.technicalVariables();
  }

  technicalVariables() {
    this._currentSlide = 0;
    this._maxCurrentSlide = this.slides.length - 1;
    this._biasTape = 0;
  }

  checkDirection(funVertical, funHorizontal) {
    if (this.direction == "vertical") {
      funVertical();
    } else if (this.direction == "horizontal") {
      funHorizontal();
    }
  }

  switching(n) {
    let heightSlide = 0;
    let widthSlide = 0;
    this.checkDirection(() => {
      heightSlide = window.getComputedStyle(this.slides[0]).height.match(/\d|\./g).join("");
    }, () => {
      widthSlide = +window.getComputedStyle(this.slides[this._currentSlide + 1 == this.slides.length ? 0 : this._currentSlide + 1]).width.match(/\d|\./g).join("") + +window.getComputedStyle(this.slides[0]).marginRight.match(/\d|\./g).join("");
    });
    const maxBiasTape = (heightSlide || widthSlide) * this._maxCurrentSlide;
    this._currentSlide += n;
    this._biasTape = (heightSlide || widthSlide) * this._currentSlide;

    if (this._currentSlide > this._maxCurrentSlide || n == 0) {
      this._currentSlide = 0;
      this._biasTape = 0;
    }

    if (this._currentSlide < 0) {
      this._currentSlide = this.leafedSlide == 1 ? this._maxCurrentSlide : this._maxCurrentSlide - 1;
      this._biasTape = this.leafedSlide == 1 ? maxBiasTape : maxBiasTape - widthSlide;
    }

    if (this._currentSlide == 2 && this.tape.classList.contains("page")) {
      setTimeout(() => {
        document.querySelector(".hanson").style.display = "block";
        document.querySelector(".hanson").classList.add("animated", "slideInDown");
      }, 3000);
    }

    this.checkDirection(() => {
      this.tape.style.transform = `translateY(-${this._biasTape}px)`;
    }, () => {
      this.tape.style.transform = `translateX(-${this._biasTape}px)`;
    });
  }

  initializationEvent() {
    try {
      this.buttonsNext.forEach(button => {
        button.addEventListener('click', () => {
          this.switching(this.leafedSlide);
        });
      });
    } catch (error) {}

    try {
      this.buttonPrev.forEach(button => {
        button.addEventListener('click', () => {
          this.switching(-this.leafedSlide);
        });
      });
    } catch (error) {}

    try {
      this.logo.forEach(item => {
        item.addEventListener('click', () => {
          this.switching(0);
        });
      });
    } catch (error) {}
  }

}

/***/ }),

/***/ "./src/js/modules/slider/sliderMini.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/sliderMini.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderMini; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class SliderMini extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(activeClass = "card-active", autoSwitching = false) {
    super(activeClass, autoSwitching);
  }

  broadcastActive() {
    this.slides.forEach(slide => slide.classList.remove(this.activeClass));

    this.slides[this._currentSlide].classList.add(this.activeClass);
  }

  initializationEvent() {
    let auto;

    if (this.autoSwitching) {
      auto = setInterval(() => {
        this.switching(this.leafedSlide);
        this.broadcastActive();
      }, 5000);
      this.tape.addEventListener('mouseover', () => {
        clearInterval(auto);
      });
      this.tape.addEventListener('mouseout', () => {
        auto = setInterval(() => {
          this.switching(this.leafedSlide);
          this.broadcastActive();
        }, 5000);
      });
    }

    try {
      this.buttonsNext.forEach(button => {
        button.addEventListener('click', () => {
          this.switching(this.leafedSlide);
          this.broadcastActive();
          clearInterval(auto);
        });
      });
    } catch (error) {}

    try {
      this.buttonPrev.forEach(button => {
        button.addEventListener('click', () => {
          this.switching(-this.leafedSlide);
          this.broadcastActive();
          clearInterval(auto);
        });
      });
    } catch (error) {}
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map