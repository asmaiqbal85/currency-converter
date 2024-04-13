#! /usr/bin/env node
import inquirer from "inquirer"
 

const Currency : any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([{
     name: "from",
     message: "Enter from Currency",
     type: "list",
     choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name: "amount",
    message: "Enter your amount",
    type: "number",
}
])

let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let BaseAmount = amount / fromAmount // USD base currency // 4
let convertedAmount = BaseAmount * toAmount
console.log(convertedAmount);