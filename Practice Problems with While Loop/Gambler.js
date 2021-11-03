const prompt = require('prompt-sync')({ sigint: true });

let balance = 100, winCount = 0, betCount = 0, play, choice = 1;
while (choice == 1) {
    balance = 100;
    console.log(`\nGambling:\nStarted with balance = ${balance}   number_of_wins = ${winCount}`);
    while (balance > 0 && balance < 200) {
        play = Math.floor(Math.random() * 10) % 2;
        ++betCount;
        if (play == 0) --balance;
        else ++balance;
    }
    if (balance == 200) {
        console.log("Gambler won.");
        ++winCount;
    } else console.log("Gambler lost.");
    console.log(`Game result: number_of_bets = ${betCount}   number_of_wins = ${winCount}\nMake a choice:\n1. Start a new game\nPress any other key to exit game.`);
    choice = Number(prompt("Your choice: "));
}