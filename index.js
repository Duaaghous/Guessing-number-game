#! /usr/bin/env node
import inquirer from "inquirer";
// 1.computer will generate a random number
// 2.user input for guessing number
// 3.compare user input with computer generated number and show result
const randomNum = Math.floor(Math.random() * 6 + 1);
console.log(randomNum);
console.log("START");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number b/w 1-6 :",
    },
]);
if (answer.userGuessedNumber === randomNum) {
    console.log("congratulation you guess a perfect number");
}
else {
    console.log("congratulation you guess a wrong number");
}
console.log(answer);
