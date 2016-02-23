//var readline = require('readline-sync');
//
//var name = readline.question("Wahat's your name?");
//
//console.log("My name is: " + name);
//
//var num = readline.question("Enter a number to be multiplied by 3 ");
//console.log("Your number : " + num + " multiplied by 3 equals " + parseInt(num) * 3);


var readline = require('readline-sync');
var num = readline.question("Please enter a number: ");
var anotherNum = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operator(+, -, * , /): ");
switch (op) {
case "+":
    console.log(parseFloat(num) + parseFloat(anotherNum));
    break;
case "-":
    console.log(parseFloat(num) - parseFloat(anotherNum));
    break;
case "*":
    console.log(parseFloat(num) * parseFloat(anotherNum));
    break;
case "/":
    console.log(parseFloat(num) / parseFloat(anotherNum));
    break;
default:
    console.log("Invalid operater.");
}