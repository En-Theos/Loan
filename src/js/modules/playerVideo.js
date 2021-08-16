export default class PlayerVideo {
    constructor(seModal, selButtons, selElements = null) {
        this.modal = document.querySelector(seModal);
        this.buttons = document.querySelectorAll(selButtons);
        this.elements = document.querySelectorAll(selElements);
        this.videoUnBlock = this.videoUnBlock.bind(this);
        this.path = '';
    }

    initializationVideo() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    videoUnBlock(state, element) {
        if (state.data === 0) {
            this.elements.forEach(elem => {
                if (elem.getAttribute('data-next') == (+element.parentElement.getAttribute('data-next') + 1)) {
                    if (element.closest(".module").id == elem.closest(".module").id) {
                        elem.style.filter = 'none';
                        elem.style.opacity = '1';

                        elem.querySelector(".play__circle").innerHTML = this.elements[0].querySelector(".play__circle").innerHTML;
                        elem.querySelector(".play__circle").classList.remove('closed');
                        elem.querySelector(".play__text").innerHTML = this.elements[0].querySelector(".play__text").innerHTML;
                        elem.querySelector(".play__text").classList.remove('attention');

                        elem.addEventListener('click', () => {
                            this.path = elem.querySelector('.play').getAttribute("data-url");
                            this.player.loadVideoById(this.path);
                            this.modal.style.display = "flex";
                        });
                    }
                }
            });
        }
    }

    initializationEvent() {
        this.initializationVideo();

        this.buttons.forEach(button => {
            if (!button.getAttribute("data-block")) {
                button.addEventListener('click', () => {
                    if (this.path == '') {
                        this.path = button.getAttribute("data-url");
    
                        this.player = new YT.Player('frame', {
                            height: '100%',
                            width: '100%',
                            videoId: this.path,
                            events: {
                                'onStateChange': (state) => this.videoUnBlock(state, button)
                            }
                        });
                        this.modal.style.display = "flex";
                    } else {
                        this.path = button.getAttribute("data-url");
                        this.player.loadVideoById(this.path);
                        this.player.addEventListener('onStateChange', (state) => this.videoUnBlock(state, button));
                        this.modal.style.display = "flex";
                    }
                });
            }
        });

        this.modal.addEventListener('click', (event) => {
            if (event.target == this.modal || event.target.classList.contains("close")) {
                this.modal.style.display = "none";
                this.player.pauseVideo();
            }
        });
    }
}