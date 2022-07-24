const character = document.querySelector("#character");
const block = document.querySelector("#block");

function jump() {
    if (character.classList !== "animate") {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    }, 500);
}

const checkDead = setInterval(() => {
    const characterTop = parseInt( window.getComputedStyle(character).getPropertyPriority("top") );
    // const blockLeft = 
}, 19);

