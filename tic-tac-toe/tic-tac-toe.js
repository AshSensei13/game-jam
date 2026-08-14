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
  let currentPlayer = "X";
  displayBoard();

  while (true) {
    const move = await getPlayerMove();

    if (board[move - 1] === " ") {
        //valid move
        board[move - 1] = currentPlayer;
        //switch player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
        //invalid move
        console.log("That position is already taken!");
    }
    displayBoard();
  }
  rl.close;
  process.exit();
}

testGame()
