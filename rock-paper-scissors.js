// When user clicks one of their choices, play a round and check if either player won
const playerChoices = document.querySelectorAll(".playerChoices button");
for (const choice of playerChoices) {
    choice.addEventListener("click", playRound);
    choice.addEventListener("click", checkEndGame);
}

// Warn player if they try to select the computer's option
const computerChoices = document.querySelectorAll(".computerChoices button");
for (const choice of computerChoices) {
    choice.addEventListener("click", cheater);
}


// Helper function to warn player if they try to select the computer's option
function cheater() {
    alert("That's not yours, idiot");
}


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
    // Remove all highlights
    const allButtons = document.querySelectorAll(".rock, .paper, .scissors");
    for (const button of allButtons) {
        button.classList.remove("highlightrock", "highlightpaper", "highlightscissors");
    }

    // Get both player's choices and current scores
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.currentTarget.getAttribute("class");
    computerScore = document.querySelector(".computerScore")
    playerScore = document.querySelector(".playerScore")

    // Highlight both player's choices
    document.querySelector(".computerChoices " + "." + computerSelection).classList.add("highlight" + computerSelection)
    document.querySelector(".playerChoices " + "." + playerSelection).classList.add("highlight" + playerSelection)
    
    // If player wins, add 1 to player's score and output result
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
        document.querySelector("p").innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    // If computer wins, add 1 to computer's score and output result
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        document.querySelector("p").innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    // If tie, just output result
    else {
        document.querySelector("p").innerText = `It's a Tie!`;
    }

    return;
}


// Check if either score is 5 and end the game if so
function checkEndGame() {
    const playerScore = document.querySelector(".playerScore").innerText;
    const computerScore = document.querySelector(".computerScore").innerText

    if (playerScore === '5' || computerScore === '5') {
        // Change bottom text to represent outcome
        if (playerScore > computerScore) {
            document.querySelector("p").innerText = `CONGRATULATIONS! YOU WON!`;
        }
        else {
            document.querySelector("p").innerText = `You lose, try again!`;
        }

        // Add a reset button
        const reset = document.createElement("button");
        const node = document.createTextNode("Reset");
        reset.appendChild(node);
        reset.classList.add("reset");
        const element = document.querySelector(".footer");
        element.appendChild(reset);
        reset.addEventListener("click", newGame);

        // Disable all event listeners on buttons
        for (const choice of playerChoices) {
            choice.removeEventListener("click", playRound);
            choice.removeEventListener("click", checkEndGame);
        }
        for (const choice of computerChoices) {
            choice.removeEventListener("click", cheater);
        }
    }

    return;
}


// Reset game if reset button is clicked
function newGame() {
    // Re-enable event listeners on choices
    const playerChoices = document.querySelectorAll(".playerChoices button");
    for (const choice of playerChoices) {
        choice.addEventListener("click", playRound);
        choice.addEventListener("click", checkEndGame);
    }
    const computerChoices = document.querySelectorAll(".computerChoices button");
    for (const choice of computerChoices) {
        choice.addEventListener("click", cheater);
    }

    // Change bottom text to original text
    document.querySelector("p").innerText = `First to 5 wins!`;

    // Change both scores to 0
    document.querySelector(".playerScore").innerText = "0";
    document.querySelector(".computerScore").innerText = "0";
    
    // Remove reset button
    document.querySelector(".reset").remove();

    // Remove all highlights
    const allButtons = document.querySelectorAll(".rock, .paper, .scissors");
    for (const button of allButtons) {
        button.classList.remove("highlightrock", "highlightpaper", "highlightscissors");
    }

    return;
}

