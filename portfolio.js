document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("header nav ul");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    
    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - 60;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
        navLinks.classList.remove("active");
    }
    
    const introText = document.querySelector(".intro-text h1");
    const introWords = ["A Passionate Developer", "Welcome to My Portfolio"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newTextDelay = 2000;
    function type() {
        if (charIndex < introWords[wordIndex].length) {
            introText.textContent += introWords[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    function erase() {
        if (charIndex > 0) {
            introText.textContent = introWords[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            wordIndex++;
            if (wordIndex >= introWords.length) wordIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    setTimeout(type, newTextDelay + 250);
    
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 0.3s ease-in-out";
        });
        project.addEventListener("mouseleave", () => {
            project.style.transform = "scale(1)";
        });
    });
});
