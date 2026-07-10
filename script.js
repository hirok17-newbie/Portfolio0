
console.log("Welcome to Hirok Jyoti Ray's Portfolio");

const contactBtn = document.querySelector(".btn");

contactBtn.addEventListener("click", function () {
    alert("Thank you for visiting my portfolio!");
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
});

window.dispatchEvent(new Event("scroll"));
const typingText = [
    "BCA Student",
    "Web Developer",
    "Python Learner",
    "Future Software Engineer"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (charIndex < typingText[textIndex].length) {

        typing.textContent += typingText[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typing.textContent = typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 60);

    } else {

        textIndex++;

        if (textIndex >= typingText.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el=>observer.observe(el));