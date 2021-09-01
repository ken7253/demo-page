export default class Parallax {
    target: NodeList | null;
    observer: IntersectionObserver;
    constructor(_settings?: IntersectionObserverInit);
    bind(className: string): void;
    private cb;
}
