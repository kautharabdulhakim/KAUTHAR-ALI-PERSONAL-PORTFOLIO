// Welcome message
console.log("Welcome to Kauthar Ali's Portfolio!");

// Show current year automatically
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Kauthar Ali.
        All rights reserved.</p>
    `;
}

// Contact button interaction
const contactSection = document.querySelector("#contact");

if (contactSection) {
    console.log("Contact section loaded successfully.");
}

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation clicked:", this.textContent);
    });
});
