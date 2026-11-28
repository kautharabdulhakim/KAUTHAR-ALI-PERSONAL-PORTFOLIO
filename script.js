// Welcome message
console.log("Welcome to Kauthar Ali's Portfolio!");

// Show current year automatically
const footer = document.querySelector("footer");
if (footer) {
    footer.innerHTML = `<p>© ${new Date().getFullYear()} Kauthar Ali. All rights reserved.</p>`;
}

// Header style on scroll
const header = document.querySelector(".site-header");
const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal elements as they scroll into view
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => revealObserver.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add("visible"));
}

// Highlight the nav link for the section in view
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => navObserver.observe(s));
}
