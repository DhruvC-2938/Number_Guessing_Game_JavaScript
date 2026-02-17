
let a = Math.floor(Math.random() * 100);

let input;
let score = 100;

const inputBox = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const message = document.querySelector(".message");
const scoreSpan = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

button.addEventListener("click", function () {

    input = inputBox.value;
    score = score - 1;
    scoreSpan.innerText = score;

    if (input == a) {
        message.innerText = "Congratulations! You have guessed the correct number.";
        inputBox.disabled = true;

    button.style.display = "none";       
    restartBtn.style.display = "inline-block"; 
    }
    else if (input > a && input < 100) {
        message.innerText = "Your guess is too high";
    }
    else if (input < a && input > 0) {
        message.innerText = "Your guess is too low";
    }
    else {
        message.innerText = "Please enter a valid number between 0 to 100";
    }

    inputBox.value = "";
});
restartBtn.addEventListener("click", function () {

    a = Math.floor(Math.random() * 100);
    score = 100;

    scoreSpan.innerText = score;
    message.innerText = "Game restarted! Guess a new number.";
    inputBox.disabled = false;
    inputBox.value = "";

    restartBtn.style.display = "none"; 
    button.style.display = "inline-block";
});

