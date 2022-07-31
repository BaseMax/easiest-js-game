// Const variables, elements
const block = document.querySelector("#block");
const character = document.querySelector("#character");
const score = document.getElementById("scoreSpan")

// Variable
let counter = 0;

// Function
const jump = () => {
    if (character.classList === "animate") return;
    character.classList.add("animate");

    setTimeout(() => {
        character.classList.remove("animate");
    }, 300);
};

// Init, timer
const timer = setInterval(() => {
    const characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top") );
    const blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue("left") );

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        counter = 0;
        block.style.animation = "none";
        clearInterval(timer);
        alert("Game score: " + Math.floor(counter / 100));
        location.reload();
    } else {
        counter++;
        score.innerHTML = Math.floor(counter / 100);
    }
}, 10);
