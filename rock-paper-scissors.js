// When user clicks one of their choices, run playRound
const playerChoices = document.querySelectorAll(".playerChoices button");
for (const choice of Array.from(playerChoices)) {
    choice.addEventListener("click", playRound);
}


// Warn player if they try to select the computer's option
const computerChoices = document.querySelectorAll(".computerChoices button");
for (const choice of Array.from(computerChoices)) {
    choice.addEventListener("click", () => alert("That's not yours, idiot"));
}


// If either score is 5, display the winner and a reset button and end the game
    // Change display completely, only showing scores, outcome and reset button (no rps buttons)


// If reset button is pressed, reset page completely to scores at 0 and bottom text to original


// Generate a random choice of rock, paper or scissors for the computer
function getComputerChoice() {
    // Generate randomNumber 0, 1 or 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Return rock, paper or scissors based on randomNumber
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}


// Compares player's selection against computer's selection and returns the result
function playRound(playerSelection, computerSelection) {
    // Generate a computer selection and pull player selection from button that was clicked
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.currentTarget.getAttribute("class");

    // Add cool highlight effect to both choices to give the user an idea on what was chosen
    
    // compare playerSelection vs computerSelection and return the result
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        // update player1's score counter +1
        document.querySelector(".playerScore").innerText = parseInt(document.querySelector(".playerScore").innerText) + 1;
        // change bottom text to outcome showing player won
        document.querySelector("p").innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        // update computer's score counter +1
        document.querySelector(".computerScore").innerText = parseInt(document.querySelector(".computerScore").innerText) + 1;
        // change bottom text to outcome showing computer won
        document.querySelector("p").innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else {
        // change bottom text to outcome showing tie
        document.querySelector("p").innerText = `It's a Tie!`;
    }
}