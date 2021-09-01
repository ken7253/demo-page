import Parallax from "./modules/parallax.js";
import ThemeObserver from "./modules/ThemeObserver.js";

(() => {
  const colorScheme = new ThemeObserver;
  colorScheme.bind('.toggle-theme');
  const parallax = new Parallax;
  parallax.bind('.hdg-02');
})();
