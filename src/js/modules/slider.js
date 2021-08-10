export default class Slider {
    constructor (selTape, selSlides, selButtonNext, selLogo) {
        this.tape = document.querySelector(selTape);
        this.slides = document.querySelectorAll(selSlides);
        this.buttonsNext = document.querySelectorAll(selButtonNext);
        this.logo = document.querySelectorAll(selLogo);

        this.currentSlide = 0;
        this.maxCurrentSlide = this.slides.length - 1;
    
        this.biasTape = 0;
    }

    switching(n) {
        const heightSlide = window.getComputedStyle(this.slides[0]).height.match(/\d|\./g).join("");
        const maxBiasTape = heightSlide * this.maxCurrentSlide;
            
        this.currentSlide += n;
        this.biasTape = heightSlide * this.currentSlide;
        
        if (this.currentSlide > this.maxCurrentSlide || n == 0) {
            this.currentSlide = 0;
            this.biasTape = 0;
        }

        if (this.currentSlide == 2 && this.tape.classList.contains("page")) {
            setTimeout(() => {
                document.querySelector(".hanson").style.display = "block";
                document.querySelector(".hanson").classList.add("animated", "slideInDown");
            }, 3000);
        }

        this.tape.style.transform = `translateY(-${this.biasTape}px)`;
      
    }

    initializationEvent() {
        this.buttonsNext.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                this.switching(1);
            });
        });
    
        this.logo.forEach(item => {
            item.addEventListener('click', () => {
                this.switching(0);
            });
        });
    }
}