let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePoint = document.querySelector("#user_score");

const compScorePoint = document.querySelector("#comp_score");

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePoint.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePoint.innerText = compScore;
        console.log("you lost!");
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "it's a draw";
    msg.style.backgroundColor = "#1D2323";
};

const genCompChoice = () => {
    const gameChoices = ["rock","paper","scissor"];
    const randomInd = Math.floor(Math.random()*3);
    return gameChoices[randomInd];
};

const playGame = (userChoice) => {
    console.log("userChoice", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);

    if(compChoice === userChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice === "paper"? false : true; 
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});