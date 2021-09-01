declare type colorScheme = "light" | "dark";
export default class ColorSchemeObserver {
    private isLight;
    private switch;
    constructor();
    get colorScheme(): colorScheme;
    bind(className: string): void;
    toggleMode(colorScheme: boolean): void;
}
export {};
