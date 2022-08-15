// generate a random choice of rock, paper or scissors for the computer
function getComputerChoice() {
    
    // generate randomNumber 0, 1 or 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // return rock, paper or scissors based on randomNumber
    if (randomNumber === 0) {
        return 'Rock';
    }
    else if (randomNumber === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

// Compares player's selection against computer's selection and returns the result
function playRound(playerSelection, computerSelection) {
    // compare playerSelection vs computerSelection and return the result
    if (playerSelection === 'Rock' && computerSelection === 'Rock' || playerSelection === 'Paper' && computerSelection === 'Paper' || playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return "It's a tie!";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    // call playRound to play a 5 round game that keeps score and reports a winner/loser at the end
    // At this point console.log is used to display the results of each round and the winner at the end
    // Use prompt() to get input from the user
}

let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound('Rock', computerSelection));