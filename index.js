//Rock Paper Scissors Game

//Create function for users choice]
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('ERROR!')
    }
}

