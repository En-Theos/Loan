export default class Slider {
    constructor ({selTape, selSlides, selButtonNext, selButtonPrev, selZeroSlide, direction = "vertical", leafedSlide = 1, activeClass = "card-active", autoSwitching = false}) {
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
        this.heightSlide = 0;
        this.widthSlide = 0;

        this.checkDirection(() => {
            this.heightSlide = window.getComputedStyle(this.slides[0]).height.match(/\d|\./g).join("");
        }, () => {
            const margin = +window.getComputedStyle(this.slides[0]).marginRight.match(/\d|\./g).join("");
            const width = +window.getComputedStyle(this.slides[this._currentSlide + 1 == this.slides.length ? 0 : this._currentSlide + 1]).width.match(/\d|\./g).join("");
            this.widthSlide = margin + width;
        });
    }

    checkDirection(funVertical, funHorizontal) {
        if (this.direction == "vertical") {
            funVertical();
        } else if (this.direction == "horizontal") {
            funHorizontal();
        } 
    }

    switching(n) {
        const maxBiasTape = (this.heightSlide || this.widthSlide) * this._maxCurrentSlide;
        this._currentSlide += n;
        this._biasTape = (this.heightSlide || this.widthSlide) * this._currentSlide;

        
        if (this._currentSlide > this._maxCurrentSlide || n == 0) {
            this._currentSlide = 0;
            this._biasTape = 0;
        }
        if (this._currentSlide < 0) {
            this._currentSlide = this.leafedSlide == 1 ? this._maxCurrentSlide : this._maxCurrentSlide - 1;
            this._biasTape = this.leafedSlide == 1 ? maxBiasTape : maxBiasTape - this.widthSlide;
        }
        
        if (this._currentSlide == 2 && this.tape.classList.contains("page")) {
            setTimeout(() => {
                document.querySelector(".hanson").style.display = "block";
                document.querySelector(".hanson").classList.add("animated", "slideInDown"); 
            }, 3000);
        }

        this.slides.forEach(s => s.style.height = "");
        this.slides[this._currentSlide].style.height = "100vh";

        this.checkDirection(() => {
            this.tape.style.transform = `translateY(-${this._biasTape}px)`;
        }, () => {
            this.tape.style.transform = `translateX(-${this._biasTape}px)`;
        });
    }

    initializationEvent() {
        this.slides[0].style.height = "100vh";
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