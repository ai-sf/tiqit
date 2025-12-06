function animateOnScroll() {
const windowHeight = window.innerHeight;
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    let ratio = 1 - ((rect.top-650) / (windowHeight * 1));
    ratio = Math.min(Math.max(ratio, 0), 1);
    el.style.opacity = ratio;
    const translateY = 50 * (1 - ratio);
    el.style.transform = `translateY(${translateY}px)`;
});
}
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);