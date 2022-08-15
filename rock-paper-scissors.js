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


// Request choice from user, require it to be some form of rock, paper or scissors, ask until valid choice is given
function getPlayerChoice() {
    let playerSelection;

    do {
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
    while (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors');

    return playerSelection;
}


// Compares player's selection against computer's selection and returns the result
function playRound(playerSelection, computerSelection) {
    // compare playerSelection vs computerSelection and return the result
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'win';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'lose';
    }
    else {
        return 'tie';
    }
}


// Play a 5 round game that keeps score and reports a winner/loser at each game and at the end
function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log('First to 5 points wins')

    // loop through games until first to 5 points, show winner at each round
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        }
        else if (result === 'lose') {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        }
        else {
            console.log(`It's a Tie!`);
        }

        // show current scoreboard
        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}\n\n`);
    }

    // After someone gets 5 points, print overall winner
    if (playerScore > computerScore) {
        console.log("CONGRATULATIONS! YOU WON!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost. You suck bruh...");
    }
    else {
        console.log("It's a tie.")
    }
}

game();