export default class Forms {
    constructor(selForm, urlDataBase) {
        this.form = document.querySelector(selForm);
        this.urlDataBase = urlDataBase;

        this.checksText();
        this.mask();
    }

    checksText() {
        this.form.querySelector("[type='email']").addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/./g, function (char) {
                if (/\p{sc=Cyrillic}| /u.test(char)) {
                    return '';
                } else {
                    return char;
                }
            });
        });
    }

    mask() {
        const inputs = document.querySelectorAll("[name='phone']");

        function createMask() {
            let matrix = '+1 (___) ___-____';
            let i = 0;
            let def = matrix.replace(/\D/g, '');
            let val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            if (val.slice(0, def.length) != def) {
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) {
                if (/[_\d]/.test(a) && i < val.length) {
                    return val.charAt(i++);
                } else {
                    if (i >= val.length) {
                        return '';
                    } else {
                        return a;
                    }
                }
            });
        
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                this.setSelectionRange(this.value.length, this.value.length);
            }
        }

        inputs.forEach(item => {
            item.addEventListener('input', createMask);
            item.addEventListener('focus', createMask);
            item.addEventListener('blur', createMask);
        });
    }

    sendStatusNotification(message, messageImg) {
        this.form.style.display = "none";

        const divMessage = document.createElement("div");
        divMessage.classList.add("statusMesage");
        divMessage.innerHTML = `
            <img src="${messageImg}" alt="Ops...">
            ${message}
        `;

        this.form.parentElement.append(divMessage);

        setTimeout(() => {
            divMessage.remove();
            this.form.style.display = "block";
        }, 3000);
    }

    initializationEvent() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            const imgLoad = document.createElement("img");
            imgLoad.style.cssText = `
                width: 25px;
                margin-right: 15px;
            `;
            imgLoad.src = "assets/img/forms/spinner.gif";
            this.form.querySelector(".btn").after(imgLoad);

            const formData = new FormData(this.form);
            const JSONData = JSON.stringify(Object.fromEntries(formData.entries()));

            fetch(this.urlDataBase, {
                method: "POST",
                headers:  {
                    "Content-type": "application/json"
                },
                body: JSONData
            }).then((response) => {
                if (response.ok && response.status == 201) {
                    this.sendStatusNotification("Successfully sent", "assets/img/forms/ok.png");
                } else {
                    this.sendStatusNotification("Send error", "assets/img/forms/catch.png");
                }
            }).catch(() => {
                this.sendStatusNotification("Send error", "assets/img/forms/catch.png");
            }).finally(() => {
                this.form.reset();
                imgLoad.remove();
            });
        });
    }
}