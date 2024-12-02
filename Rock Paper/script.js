let user = 0;
let comp = 0;

const para1 = document.querySelector("#player-score");
const para2 = document.querySelector("#comp-score");

const choices = document.querySelector(".choices");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (win, userChoice, compChoice) => {
    if (win) {
        user++;
        para1.innerText = user;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp++;
        para2.innerText = comp;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        Draw();
    }
    else{
        let win = true;
        if(userChoice === "rock"){
            win = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            win = compChoice === "scissors" ? false : true;
        }
        else{
            win = compChoice === "rock" ? false : true;
        }
        showWinner(win, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

