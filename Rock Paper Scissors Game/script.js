function game() { 

    function round1() {

        let playerChoice = prompt("rock, paper or scissors").toLowerCase();
        let computerChoice = computerPICK();
                
        function computerPICK() {
            let random = ["rock", "paper", "scissors"];
            return random[Math.floor(Math.random() * 3)];
        }
    
        if (playerChoice === "rock") {
            if (playerChoice === "rock" && computerChoice === "paper") {
                return "You lose! Paper Beats Rock";
            } else if (playerChoice === "rock" && computerChoice === "rock") {
                return "Draw!";
            } else if (playerChoice === "rock" && computerChoice === "scissors") {
                return "You won! Rock beats scissors!";
            } else {
                return "lathos";
            }
        } else if (playerChoice === "paper") {
            if (playerChoice === "paper" && computerChoice === "paper") {
                return "Draw!";
            } else if (playerChoice === "paper" && computerChoice === "rock") {
                return "You win! Paper beats scissors";
            } else if (playerChoice === "paper" && computerChoice === "scissors") {
                return "You lose! Scissors beat paper";
            } else {
                return "lathos"
            }
        } else if (playerChoice === "scissors") {
            if (playerChoice === "scissors" && computerChoice === "scissors") {
                return "Draw!";
            } else if (playerChoice === "scissors" && computerChoice === "paper") {
                return "You win! Scissors beat paper";
            } else if (playerChoice === "scissors" && computerChoice === "rock") {
                return "You lose! Rock beats scissors";
            } else {
                return "lathos"
            }
        } else {
            return "lathos"
        }
    }
    console.log(round1());
    console.log(round1());
    console.log(round1());
    console.log(round1());
    console.log(round1());
}
game();