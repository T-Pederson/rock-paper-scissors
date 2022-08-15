// generate a random choice of rock, paper or scissors for the computer
function getComputerChoice() {
    
    // generate randomNumber 0, 1 or 2
    const randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;
    
    // for randomNumber, 1 = rock, 2 = paper, 3 = scissors
    if (randomNumber === 0) {
        return computerSelection = 'rock';
    }
    else if (randomNumber === 1) {
        return computerSelection = 'paper';
    }
    else {
        return computerSelection = 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // should take 2 parameters, playerSelection and computerSelection
    // return a string to declare winner like so "You Lose! Paper beats rock"
        // return result, do not console.log here
    // Make playerSelection work case-insensitively (rock, Rock, RocK etc.)

    // if ((playerSelection = rock && computerSelection = rock) || ), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = paper), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'
    // else if (playerSelection = rock && computerSelection = rock), return 'It's a tie!'

}

function game() {
    // call playRound to play a 5 round game that keeps score and reports a winner/loser at the end
    // At this point console.log is used to display the results of each round and the winner at the end
    // Use prompt() to get input from the user
}


console.log(getComputerChoice());