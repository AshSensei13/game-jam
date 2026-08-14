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

//Create function to check if there is a winner
const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const checkWinner = () => {
    //Loop through the winning combination array which contains arrays
    for(let i = 0; i < winningCombinations.length; i++) {
        //assign combination to one of the winning arrays
        const combination = winningCombinations[i]
        //assign variables a, b, and c to the position of each element in winning array
        const a = combination[0]
        const b = combination[1]
        const c = combination[2]

        //check if the winning positions match to the board
        if (
            board[a] !== " " &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            return board[a]
        }
    }
    return null
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

        //after updating board check if there is a winner
        //if(winner) is truthy if "X" or "O" and falsy if null
        const winner = checkWinner();
        if (winner) {
            console.log(`${winner} wins!`);
            displayBoard()
            break
        }

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
