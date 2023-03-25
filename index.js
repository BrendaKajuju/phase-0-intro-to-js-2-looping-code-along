// // Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log (`I'm ${age} years old. Happy birthday to me!`);
// }
// const gifts = ["Teddy Bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++ ) {
//         console.log(`Wrapped ${gifts[i]} are under a tree and I added a bow`);
        
//     }
//     return gifts
// }
// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
let eventNames = ["surprise"]

function writeCards (names, eventNames) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push (`Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`)
    }
    return cards;
}
console.log (writeCards(names, eventNames));

// const gifts = ["teddy bear", "drone", "doll"];

//While loop examples
// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// While loop examples

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer --;
    }
}
console.log (countDown(10));
