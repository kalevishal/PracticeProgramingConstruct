const prompt = require('prompt-sync')({ sigint: true });

let n = Number(prompt("Enter a positive integer: "));
if (n >= 1 && Number.isInteger(n)) {
    console.log("Factors of " + n + " are:");
    for (let i = 1; i * i <= n; i++)
        if (n % i == 0) {
            console.log(i);
            if (n / i != i)    
                console.log(n / i);
        }
} else console.log("Invalid user input.");