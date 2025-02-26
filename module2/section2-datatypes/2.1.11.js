/*
#######################
2.1.11 SECTION PRACTICE
#######################

Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
*/

bl1 = true;
bl2 = Boolean(false);

nr1 = 20
nr2 = Number(30);

bg1 = 10n;
bg2 = BigInt(20);

str1 = 'Hello there';
str2 = String("Hello there");

console.log(`${bl1} [${typeof bl1}]`);
console.log(`${bl2} [${typeof bl2}]`);

console.log(`${nr1} [${typeof nr1}]`);
console.log(`${nr2} [${typeof nr2}]`);

console.log(`${bg1} [${typeof bg1}]`);
console.log(`${bg2} [${typeof bg2}]`);

console.log(`${str1} [${typeof str1}]`);
console.log(`${str2} [${typeof str2}]`);

/*
Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
*/

dataStr = "1234"
dataNumber = Number(dataStr);
dataBigint = BigInt(dataNumber);
dataBoolean = Boolean(dataBigint);

let data = Boolean(BigInt(Number("1234")));
console.log(`${data} - ${typeof data}`);


