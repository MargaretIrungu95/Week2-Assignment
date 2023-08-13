// DAY 2 - If/else/switch activities
// ACTIVITY 1 
// let age = 19;
// if(age < 17){
//     console.log("You aren't old enough.");
// } else{
//     console.log("Yes I can serve you.");
// }
// STRETCH
// let age = 14;
// let country = "UK";
// if(age < 17 && country == "UK"){
//     console.log("You aren't old enough.");
// } else{
//     console.log("Yes I can serve you.");
// }

// ACTIVITY 2
// let topping = "Olives"

// switch(topping){
//     case "Pepperoni":
//         console.log("This is an important ingredient for my Pizza toppings");
//         break;
//     case "Olives":
//         console.log(`I dont mind ${topping} on my pizza`);
//         break;
//     default:
//         console.log(`${topping} should not be included as a topping on the pizza`);
// }

// ACTIVITY 3
// let password = "MargaretIrungu";

// if (password.length < 8) {
//     console.log("This password is too short. Please enter atleast 8 characters.");
// } else {
//     console.log(`${password}`);
// } 

// STRETCH
// let num = 8;

// if (num % 3 === 0 || num % 5 === 0){
//     console.log(`The number ${num} is divisible by 3 or 5.`);
// } else {
//     console.log(`The number ${num} is not divisible by 3 or 5.`);
// }
// ACTIVITY 4
// let num = 25;

// if (num % 3 === 0 && num % 5 === 0){
//     console.log("Fizz Buzz"); 
// }else if (num % 3 === 0) {
//     console.log("Fizz");
// }else if (num % 5 === 0){
//     console.log("Buzz");
// }else{
//     console.log(`${num}`);
// }

// ACTIVITY 5
// const num = 2004;
// const numberAsText = `${num}`;

// const length = numberAsText.length / 2; //finds the middle point
// let adaptedLength = length; //incase the length is odd, cut out the middle character
// if (length % 2 !== 0) {
//   adaptedLength = adaptedLength + 1; //addition for the second half if length is odd
// }

// const numberFirstHalf = numberAsText.substring(0, length); //gets the first half of the input
// const numberSecondHalf = numberAsText.substring(adaptedLength); //gets the second half of the input

// for (let i = 0; i < length; i++) {
//   //loops though half of the whole text
//   const characterFirstHalf = numberFirstHalf[i]; //gets the loop iteration character (from start) of the first half
//   const characterSecondHalf =
//     numberSecondHalf[numberSecondHalf.length - (i + 1)]; //gets the loop iteration character (from end) of the second half
//   if (characterFirstHalf !== characterSecondHalf) {
//     //checks if the two characters are not the same
//     console.log("Fail");
//     return;
//   }
// }

// //after loop, all characters matched
// console.log("successful");
// ACTIVITY 6
// let time = 20.00;
// let placeOfWork = "BAE Systems" ;
// let townOfHome = "Chorley";

// if (time <= 7.00) {
//     console.log(`At ${time}hrs I am at home.`);
// } else if (time > 7.00 || time < 8.00) {
//     console.log(`At ${time}hrs I am commuting from ${townOfHome}, my home, to ${placeOfWork} which is my place of work.`);
// } else if (time > 8.00 || time <= 16.00) {
//     console.log(`At ${time}hrs I am at work in ${placeOfWork}.`);
// } else if ( time >= 16.00 || time <= 17.00) {
//     console.log(`I am on my way home to ${townOfHome}  from work in ${placeOfWork}.`);
// } else {
//     console.log(`Am finally at ${townOfHome}, Home at last!`);
// } 
    

    
// ACTIVITY 7
// const compare = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`;
// const hasA = compare.lastIndexOf("a");
// const hasE = compare.lastIndexOf("e");
// const hasI = compare.lastIndexOf("i");
// const hasO = compare.lastIndexOf("o");
// const hasU = compare.lastIndexOf("u");

// const maxFirstCompare = Math.max(hasA, hasE);
// const maxSecondCompare = Math.max(hasI, hasO);
// const maxThirdCompare = Math.max(maxSecondCompare, hasU);
// const maxLastCompare = Math.max(maxThirdCompare, maxFirstCompare);

// console.log(maxLastCompare);
// ACTIVITY 8
// const word = "1004";

// const firstCharacter = word[0];
// const lastCharacter = word[word.length - 1];

// const isSame = firstCharacter == lastCharacter;
// console.log(isSame);
// return isSame;

// ACTIVITY 9
// let num1 = 15;
// let num2 = 4;
// if ((num1 + num2) % 2 === 0){
//     console.log("True");
// }else{
//     console.log("False");
// }