const prompt = require('prompt-sync')({ sigint: true });

const n1 = Number(prompt("Enter a non-negative integer: "));

if (n1 >= 0 && Number.isInteger(n1)) {
    for (let i = 0; i <= n1; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} else console.log("Enter only non-negative integers.");