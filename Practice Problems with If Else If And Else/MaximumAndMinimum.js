const prompt = require('prompt-sync')({ sigint: true });

console.log("\nEnter 3 random numbers for analysis:");
const a = Number(prompt("Enter a: "));
const b = Number(prompt("Enter b: "));
const c = Number(prompt("Enter c: "));

let firstOperation = (a + b * c);
let secondOperation = (a % b + c);
let thirdOperation = (c + a / b);
let fourthOperation = (a * b + c);

console.log(" a + b * c -->" +firstOperation);
console.log(" a % b + c -->" +secondOperation);
console.log(" c + a / b -->" +thirdOperation);
console.log(" a * b + c -->" +fourthOperation);

console.log("Maximum number :" + Math.max(firstOperation,secondOperation,thirdOperation,fourthOperation));
console.log("Minimum number :" + Math.min(firstOperation,secondOperation,thirdOperation,fourthOperation));