//Magic 8 ball game

//Make use of readline module built in to Node
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Becaues rl.question is asynchronous, to turn collection of usernam and question into functions
//you must use promises combined with async/await when you call it later

//Create function to get user name by making it return a Promise
const getUserName = () => {
    return new Promise((resolve) => {
        rl.question('What is your name? ', (userName) => {
            resolve(userName)
        })
    })
}

//Create function to get user question by making it return a Promise
const getUserQuestion = () => {
    return new Promise((resolve) => {
        rl.question('What is your question? ', (userQuestion) => {
            resolve(userQuestion)
        })
    })
}

//Create a function that generates the 8ball answers
const getEightBallAnswer = () => {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
  }
  return eightBall;
};