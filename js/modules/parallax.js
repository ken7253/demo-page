export default class Parallax {
    constructor(_settings) {
        this.target = null;
        this.observer = new IntersectionObserver(this.cb, {
            threshold: 0.5,
            ..._settings
        });
    }
    bind(className) {
        this.target = document.querySelectorAll(className);
        this.target.forEach((element) => {
            this.observer.observe(element);
        });
    }
    cb(entries, object) {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
                return;
            const target = entry.target;
            target.classList.add('show');
            object.unobserve(target);
        });
    }
}
//# sourceMappingURL=parallax.js.map