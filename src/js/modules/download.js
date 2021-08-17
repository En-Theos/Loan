export default class Download {
    constructor(selButtons) {
        this.buttons = document.querySelectorAll(selButtons);
    }

    initializationEvent() {
        this.buttons.forEach(button => {
            button.style.cursor = "pointer";
            button.addEventListener('click', (e) => {
                e.preventDefault();
              e.stopPropagation();
                const tehLink = document.createElement("a");
                switch (button.closest(".module").id) {
                    case "1":
                        tehLink.href = "assets/img/evolve.jpg";
                        break;
                    case "2":
                        tehLink.href = "assets/img/showup.jpg";
                        break;
                    case "3":
                        tehLink.href = "assets/img/talk_bg.jpg";
                        break;
                    case "4":
                        tehLink.href = "assets/img/slide_1_m.jpg";
                        break;
                    case "5":
                        tehLink.href = "assets/img/slide_2_m.jpg";
                        break;
                    case "6":
                        tehLink.href = "assets/img/slide_3_m.jpg";
                        break;
                    case "7":
                        tehLink.href = "assets/img/main_dark.jpg";
                        break;
                    case "8":
                        tehLink.href = "assets/img/main_light.jpg";
                        break;
                }
                tehLink.download = "picture";
                tehLink.style.display = "none";

                document.body.append(tehLink);
                tehLink.click();
                tehLink.remove();
            });
        });
    }
}