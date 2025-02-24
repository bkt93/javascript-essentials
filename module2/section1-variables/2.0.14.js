/*

2.0.14 SECTION QUIZ
Question 1
Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)
Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). Display all inventory information in the console in the following form:

Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300

*/

let priceRose = 8;
let priceLily = 10;
let priceTulip = 2;

let numberRoses = 70;
let numberLilies = 50;
let numberTulips = 120;

let valueRoses = priceRose * numberRoses;
let valueLilies = priceLily * numberLilies;
let valueTulips = priceTulip * numberTulips;

let valueFlowers = valueRoses + valueLilies + valueTulips;

console.log('Rose - unit price:',priceRose,', quantity:',numberRoses,', value:',valueRoses);
console.log('Lily - unit price:',priceLily,', quantity:',numberLilies,', value:',valueLilies);
console.log('Tulips - unit price:',priceTulip,', quantity:',numberTulips,', value:',valueTulips);



