let playerScore = 0;
let computerScore = 0;
let playerSelection;

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      alert(button.id);
    });
  });
  

//randomly picks computer choice
function computerPlay() {
    let choice = Math.floor(3*Math.random());
    if (choice == 1) {
        return 'rock'
    } else if (choice == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
	console.log('Computer played: ' + computerSelection);
    console.log('You played: ' + playerSelection);
    
    if (playerSelection == computerSelection) {
        console.log('It\'s a tie!');
        return 
    }

    //checks for win condition
    switch (playerSelection) {
        case 'rock': 
            switch (computerSelection) {
                case 'paper': 
                    computerScore++;
                    console.log('Sorry, you lose');
                    return 
                case 'scissors': 
                    playerScore++;
                    console.g('That\'s a win!');
                    return
            }
        case 'paper': 
            switch (computerSelection) {
                case 'rock': 
                    playerScore++;
                    console.log('That\'s a win!');
                    return
                case 'scissors': 
                    computerScore++;
                    console.log('Sorry, you lose');
                    return
            }
        case 'scissors': 
            switch (computerSelection) {
                case 'paper': 
                    playerScore++;
                    console.log('That\'s a win!');
                    return
                case 'rock': 
                    computerScore++;
                    console.log('Sorry, you lose');
                    return   
            }

        }
    console.log('Something went wrong');
    return
}



while (playerSelection != 'quit') {
    //round code
}