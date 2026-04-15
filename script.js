const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-item');
const logo = document.getElementById('logo');

/**
 * 1. SCROLL INTERACTIVITY
 * Monitors viewport offset to trigger background and font color transitions.
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        // Scrolled style state
        navbar.style.backgroundColor = "#ffffff";
        navbar.style.height = "70px";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        logo.style.color = "#0a0a0b";
        
        navLinks.forEach(link => {
            link.style.color = "#0a0a0b";
        });
    } else {
        // Default top state
        navbar.style.backgroundColor = "transparent";
        navbar.style.height = "85px";
        navbar.style.boxShadow = "none";
        logo.style.color = "#ffffff";
        
        navLinks.forEach(link => {
            link.style.color = "#ffffff";
        });
    }
});

/**
 * 2. HOVER INTERACTIVITY
 * Dynamically changes background and text color on mouse interaction.
 */
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = "#007bff"; // Highlight color
        link.style.backgroundColor = "rgba(0, 123, 255, 0.08)";
        link.style.borderRadius = "2px";
    });

    link.addEventListener('mouseleave', () => {
        // Conditional Reversion Logic based on Scroll Position
        if (window.scrollY > 70) {
            link.style.color = "#0a0a0b";
        } else {
            link.style.color = "#ffffff";
        }
        link.style.backgroundColor = "transparent";
    });
});