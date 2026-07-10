// ======================================
// Dev Yadav Portfolio
// ======================================

console.log("Welcome to Dev Yadav Portfolio");

// ======================================
// Current Year
// ======================================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ======================================
// Skill Card Hover Animation
// ======================================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// ======================================
// Project Card Hover Effect
// ======================================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";
        card.style.boxShadow = "0 20px 45px rgba(0,0,0,.35)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "";

    });

});

// ======================================
// Typing Animation
// ======================================

const typingElement = document.querySelector(".typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "Programmer",
    "Computer Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// ======================================
// Scroll Reveal Animation
// ======================================

const revealElements = document.querySelectorAll(
    ".card, .project-card, .hero, .page-title"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// ======================================
// Active Navigation Link
// ======================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ======================================
// Back To Top Button
// ======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ======================================
// Button Ripple Effect
// ======================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";
        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

// ======================================
// Welcome Message
// ======================================

window.addEventListener("load", () => {

    console.log("Portfolio Loaded Successfully 🚀");

});
