let coinFlip = Math.floor(1+(Math.random() * 10) % 2);
let HEADS = 1;
let TAILS = 2;

if(coinFlip == HEADS){
    console.log("Heads");
}
if(coinFlip == TAILS){
    console.log("Tails");
}