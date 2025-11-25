document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav.home-navbar");
    if (!navbar) return;

    /* --- Parametri --- */
    const startBlur  = 100;
    const endBlur    = 500;

    const startColor = 400;
    const endColor   = 670;

    const maxBlur = 10;

    function clamp(v, min = 0, max = 1) {
    return Math.max(min, Math.min(max, v));
    }

    function updateNavbar() {
    const y = window.scrollY;

    /* --- 1) Blur --- */
    let blurValue;
    if (y <= startBlur) {
    blurValue = 0;
    } else if (y < endBlur) {
    blurValue = clamp((y - startBlur) / (endBlur - startBlur)) * maxBlur;
    } else {
    blurValue = maxBlur;
    }
    navbar.style.setProperty("--nav-blur", `${blurValue}px`);

    /* --- 2) Colore --- */
    let alphaValue;
    if (y <= startColor) {
    alphaValue = 0;
    } else if (y < endColor) {
    alphaValue = clamp((y - startColor) / (endColor - startColor));
    } else {
    alphaValue = 1;
    }
    navbar.style.setProperty("--nav-alpha", alphaValue.toString());

    /* --- 3) Classe finale (opzionale) --- */
    if (alphaValue === 1) {
    navbar.classList.add("scrolled");
    } else {
    navbar.classList.remove("scrolled");
    }
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
});
