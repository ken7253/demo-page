export default class ColorSchemeObserver {
    constructor() {
        this.isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        this.switch = null;
    }
    get colorScheme() {
        if (this.isLight === true) {
            return "light";
        }
        else {
            return "dark";
        }
    }
    bind(className) {
        this.switch = document.querySelector(className);
        const changeEvent = new Event('change');
        if (this.switch) {
            this.switch.addEventListener('change', () => {
                this.toggleMode(this.isLight);
                console.log(this.isLight);
            });
        }
        this.switch?.dispatchEvent(changeEvent);
    }
    toggleMode(colorScheme) {
        if (colorScheme) {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
        else {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        }
        this.isLight = !this.isLight;
    }
}
//# sourceMappingURL=ThemeObserver.js.map