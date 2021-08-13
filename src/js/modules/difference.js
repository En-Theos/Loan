export default class Difference {
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
            button.addEventListener('click', (event) => {
                if (event.target.classList.contains("plus") || event.target.closest(".plus")) {
                    if (this.localUsItems[i][this.arrCounters[i]] != button) {
                        this.localUsItems[i][this.arrCounters[i]].style.display = "flex";
                        this.localUsItems[i][this.arrCounters[i]].classList.add("animated" ,"fadeIn");
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