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

//Create function to get computer choice
const getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3)
    switch (randNum) {
        case 0: return 'rock'
        break
        case 1: return 'paper'
        break
        case 2: return 'scissors'
        break
    }
}
