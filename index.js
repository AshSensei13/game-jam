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

//Create function to find a winner given both inputs
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie game.'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The Computer wins.'
        } else {
            return 'The Human wins.'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The Computer wins.'
        } else {
            return 'The Human wins.'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The Computer wins.'
        } else {
            return 'The Human wins.'
        }
    }
    if (userChoice === 'bomb') {
        return 'The Human wins by cheating!'
    }
}

//Create function to play the game
const playGame = () => {
    let userChoice = getUserChoice('rock')
    console.log(userChoice)
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()