const character = document.querySelector("#character");
const block = document.querySelector("#block");

let counter = 0;

const jump = () => {
    if (character.classList === "animate") return;
    character.classList.add("animate");
    
    setTimeout(() => {
        character.classList.remove("animate");
    }, 300);
};

const checkDead = setInterval(() => {
    const characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top") );
    const blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue("left") );

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Game score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
