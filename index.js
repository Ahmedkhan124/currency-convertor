#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    SAR: 3.75,
    TAKKA: 109.50
};
console.log('\nWelcome to Currency convertor\n');
let userAns = await inquirer.prompt([
    {
        message: '\nSelect from currency\n',
        name: 'fromcurrency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'SAR', 'TAKKA'],
    },
    {
        message: '\nSelect to currency\n',
        name: 'tocurrency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'SAR', 'TAKKA'],
    },
    {
        message: 'Enter an amount',
        name: 'amount',
        type: 'number',
    }
]);
let fromAmount = currency[userAns.fromcurrency];
let toAmount = currency[userAns.tocurrency];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
