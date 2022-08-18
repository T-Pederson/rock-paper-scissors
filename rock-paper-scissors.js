// When user clicks one of their choices, run playRound and endGame to check if game is over
const playerChoices = document.querySelectorAll(".playerChoices button");
for (const choice of Array.from(playerChoices)) {
    choice.addEventListener("click", playRound);
    choice.addEventListener("click", endGame);
}


// Warn player if they try to select the computer's option
const computerChoices = document.querySelectorAll(".computerChoices button");
for (const choice of Array.from(computerChoices)) {
    choice.addEventListener("click", () => alert("That's not yours, idiot"));
}


// If reset button is pressed, reset the scores
    // Re-enable event listeners on playerChoices
    // Change bottom text to original text
    // Remove reset button


// Generate a random choice of rock, paper or scissors for the computer
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
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
    // Remove all permanent highlights
    const allButtons = document.querySelectorAll(".rock, .paper, .scissors");
    for (const button of Array.from(allButtons)) {
        button.classList.remove("highlightrock", "highlightpaper", "highlightscissors");
    }

    computerSelection = getComputerChoice();
    playerSelection = playerSelection.currentTarget.getAttribute("class");

    // Highlight computers choice
    document.querySelector(".computerChoices " + "." + computerSelection).classList.add("highlight" + computerSelection)

    // Maintain highlight on player's choice
    document.querySelector(".playerChoices " + "." + playerSelection).classList.add("highlight" + playerSelection)
    
    // If player wins, add 1 to player's score and output result
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        document.querySelector(".playerScore").innerText = parseInt(document.querySelector(".playerScore").innerText) + 1;
        document.querySelector("p").innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    // If computer wins, add 1 to computer's score and output result
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        document.querySelector(".computerScore").innerText = parseInt(document.querySelector(".computerScore").innerText) + 1;
        document.querySelector("p").innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    // If tie, just output result
    else {
        document.querySelector("p").innerText = `It's a Tie!`;
    }

    return;
}


// Check if either score is 5 and end the game if so
function endGame() {
    const playerScore = document.querySelector(".playerScore").innerText;
    const computerScore = document.querySelector(".computerScore").innerText

    if (playerScore === '5' || computerScore === '5') {
        // Disable event listeners on buttons
        for (const choice of Array.from(playerChoices)) {
            choice.removeEventListener("click", playRound);
        }

        // Change bottom text to represent outcome
        if (playerScore > computerScore) {
            document.querySelector("p").innerText = `CONGRATULATIONS! YOU WON!`;
        }
        else {
            document.querySelector("p").innerText = `Bruh, you suck...`;
        }

        // Add a reset button
        
    }

    return;
}