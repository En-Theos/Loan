export default class PlayerVideo {
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

        this.modal.addEventListener('click', (event) => {
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