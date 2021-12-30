function round1() { 
    function playerChoice() {
        let playerSelection = prompt("Pick Rock, Paper or Scissors");
        return playerSelection;
        //console.log(playerSelection);

    }

   playerChoice();

   function computerChoice() {
       let random = ["rock", "paper", "scissors"];
       return random[Math.floor(Math.random() * 3)];

    }
   computerChoice();
 
}

round1();
