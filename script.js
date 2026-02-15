
        let a = Math.random() * 100;
        a = Number.parseInt(a);

        let input;
        let score = 100;

        const inputBox = document.getElementById("guessInput");
        const button = document.getElementById("guessBtn");
        const message = document.querySelector(".message");
        const scoreSpan = document.getElementById("score");

        button.addEventListener("click", function () {

            input = inputBox.value;
            score = score - 1;
            scoreSpan.innerText = score;

            if (input == a) {
                message.innerText = "Congratulations! You have guessed the correct number.";
                button.disabled = true;
                inputBox.disabled = true;
            }
            else if (input > a && input < 100) {
                message.innerText = "Your guess is too high";
            }
            else if (input < a && input > 0) {
                message.innerText = "Your guess is too low";
            }
            else {
                message.innerText = "Please enter a valid number between 0 and 100";
            }

            inputBox.value = "";
        });