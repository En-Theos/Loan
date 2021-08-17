export default class Spoiler {
    constructor(selButtons, selContents) {
        this.buttons = document.querySelectorAll(selButtons);
        this.contents = document.querySelectorAll(selContents);
    }

    initializationEvent() {
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.contents[index].classList.toggle("msgActive");
                this.contents[index].classList.toggle("animated");
                this.contents[index].classList.toggle("flipInX");
            });
        });
    }
}