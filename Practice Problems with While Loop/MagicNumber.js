const prompt = require('prompt-sync')({ sigint: true });

let low = 1, high = 100, n, p, x;
console.log("\nyour integer number between 1 to 100 .");
while (low != high) {
    p = parseInt(low + high);
    if (p % 2 == 0) n = p / 2;
    else n = (p - 1) / 2;
    console.log("Make a choice.\n1. Your choice is equal to " + n + "\n2. Your choice is less than " + n + "\n3. Your choice is greater than " + n);
    x = Number(prompt("Enter your choice: "));
    switch (x) {
        case 1: {
            console.log("The magic number is " + n + " !");
            low = high = n;
            break;
        }
        case 2: {
            high = n;
            p = parseInt(low + high);
            if (p % 2 == 0) n = p / 2;
            else n = (p - 1) / 2;
            break;
        }
        case 3: {
            low = n;
            p = parseInt(low + high);
            if (p % 2 == 0) n = p / 2;
            else n = (p - 1) / 2;
            break;
        }
        default: console.log("Invalid choice!");
    }
}