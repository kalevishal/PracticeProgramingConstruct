const prompt = require('prompt-sync')({ sigint: true });

const n1 = Number(prompt("Enter a non-negative integer: "));
if (n1 >= 0 && Number.isInteger(n1)) {
    let i = -1, ans = 0;
    while (++i <= n1 && ans < 256) {
        ans = Math.pow(2, i);
        console.log("2^" + i + " = " + ans);
    }
} else console.log("Enter only non-negative integers.");