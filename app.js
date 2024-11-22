let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const DrawGame = () => {
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        comScore++;
        compScorePara.innerText = comScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    
    if (userChoice === compChoice) {
        DrawGame();
    } else {
        const userWin =
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper");

        showWinner(userWin, userChoice, compChoice);
    }

    console.log(`Scores - You: ${userScore}, Computer: ${comScore}`);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    });
});
