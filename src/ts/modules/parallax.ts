export default class Parallax {
  target: NodeList | null
  observer: IntersectionObserver

  constructor(_settings?: IntersectionObserverInit) {
    this.target = null
    this.observer = new IntersectionObserver(this.cb, {
      threshold: 0.5,
      ..._settings
    });
  }

  bind(className:string) {
    this.target = document.querySelectorAll(className);
    this.target.forEach((element) => {
      this.observer.observe(element as Element);
    })
  }

  private cb(entries: IntersectionObserverEntry[], object: IntersectionObserver) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;

      const target = entry.target;
      target.classList.add('show');

      object.unobserve(target);
    });
  }
}
