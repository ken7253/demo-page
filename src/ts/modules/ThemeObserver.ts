type colorScheme = "light" | "dark";

export default class ColorSchemeObserver {
  private isLight: boolean;
  private switch: HTMLElement | null;

  constructor() {
    this.isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    this.switch = null;
  }

  public get colorScheme(): colorScheme {
    if (this.isLight === true) {
      return "light";
    } else {
      return "dark";
    }
  }

  bind(className: string) {
    this.switch = document.querySelector(className);

    const changeEvent = new Event('change');
    if(this.switch) {
      this.switch.addEventListener('change', () => {
        this.toggleMode(this.isLight);
        console.log(this.isLight);
      })
    }
    this.switch?.dispatchEvent(changeEvent);
  }

  toggleMode(colorScheme: boolean) {
    if (colorScheme) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
    this.isLight = !this.isLight;
  }
}
