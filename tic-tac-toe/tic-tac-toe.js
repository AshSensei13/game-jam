//Add readline module to allow user to interact with js in the terminal
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Represent the board with and array with 9 positions
const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

//Create function to display the board
const displayBoard = () => {
    console.log(`
    ${board[0]} | ${board[1]} | ${board[2]}
    ---------
    ${board[3]} | ${board[4]} | ${board[5]}
    ---------
    ${board[6]} | ${board[7]} | ${board[8]}    
    `)
}

//Create function that asks user to select a position in the terminal
const getPlayerMove = () => {
    return new Promise((resolve) => {
        rl.question("Choose a position (1-9): ", (answer) => {
            resolve(answer)
        })
    })
}

//create testGame function to simulate gameplay mechanics step by step
async function testGame() {
    displayBoard()
    
    const move = await getPlayerMove()

    console.log(`You chose position ${move}`);
    rl.close
    process.exit()
}

testGame()
