const prompt = require('prompt-sync')({ sigint: true });

const n = Number(prompt("Enter a positive integer: "));
if (n >= 1 && Number.isInteger(n)) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += Math.pow(i, -1);
    }
    console.log("The harmonic number is: " + ans);
} else console.log("Enter only positive integers.");