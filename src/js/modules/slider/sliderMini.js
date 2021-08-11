import Slider from "./slider";

export default class SliderMini extends Slider {
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