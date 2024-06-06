#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1.computer will generate a random number
// 2.user input for guessing number
// 3.compare user input with computer generated number and show result
const randomNum = Math.floor(Math.random() * 6 + 1);
console.log(randomNum);
console.log("START");
const answer = await inquirer_1.default.prompt([
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
