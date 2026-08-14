//Magic 8 ball game

//Add operator to collect name of user
let userName = "";
userName ? console.log(`Hello ${userName}`) : console.log("Hello!");

//Added userQuestion variable
let userQuestion = "Am I a good programmer?";
console.log(`${userName} asked ${userQuestion}`);

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