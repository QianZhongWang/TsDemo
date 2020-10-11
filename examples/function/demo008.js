var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (Array.isArray(x)) {
        return Math.floor(Math.random() * x.length);
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return {
            suit: suits[pickedSuit],
            card: x % 13
        };
    }
}
var myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 }
];
var pickedCard1 = myDeck[pickCard(myDeck)];
var pickedCard2 = pickCard(15);
console.log(pickedCard1);
console.log(pickedCard2);
