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

// Play a 5 round game that keeps score and reports a winner/loser at each game and at the end
function game() {
    // Request choice from user, require it to be some form of rock, paper or scissors, ask until valid choice is given
    let playerSelection;
    while (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
        playerSelection = prompt('Choose your weapon! (Rock, Paper or Scissors)');

        // Check if selection is null or '', if so alert user of error
        if (playerSelection === null || playerSelection === '') {
            alert("That's not a valid weapon!");
            continue;
        }
        
        // Convert player selection to format 'Rock' 'Paper' or 'Scissors'
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.split('');
        playerSelection[0] = playerSelection[0].toUpperCase();
        playerSelection = playerSelection.join(''); 

        // Check if selection is 'Rock', 'Paper', or 'Scissors', if not alert user of error
        if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
            alert("That's not a valid weapon!");
        }
    }
}