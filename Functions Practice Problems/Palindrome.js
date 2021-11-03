const prompt = require('prompt-sync')({ sigint: true });

console.log("\nEnter the two numbers:");
let num1 = Number(prompt("number1: "));
let num2 = Number(prompt("number2: "));

function getPalindrome(num) {
    let ans = 0;
    while (num > 0) {
        ans = ans * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return ans;
}

if (getPalindrome(num1) == num2) console.log("The two numbers are palindromes.");
else console.log("The two numbers are not palindromes.");