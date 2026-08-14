//Rock Paper Scissors Game

//Utilise nodes built-in readline module to allow users to type in terminal
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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
//use readline module and question method to take userInput
const playGame = () => {
    rl.question('Choose rock, paper, scissors or bomb: ', (answer) => {
        let userChoice = getUserChoice(answer)
        if (!userChoice) {
            rl.close()
            return
        }
        console.log('You chose:', userChoice)
        let computerChoice = getComputerChoice()
        console.log('Computer chose:', computerChoice)
        console.log(determineWinner(userChoice, computerChoice))
        rl.close
        process.exit()
    })
}

playGame()