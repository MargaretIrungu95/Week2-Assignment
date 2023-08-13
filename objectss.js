// ACTIVITY 1
// let person = {
//     name: "Margaret",
//     age: 23,
//     dateOfBirth: "January 30th, 2000.",
//     faveFoods: [
//         "Chapati",
//         "Ugali",
//         "Samaki",
//         "Nyama Choma"
//     ],
//     sayHi() {
//         return (`Hello my name is ${this.name}. I am ${this.age} years old and my favourite foods are ${this.faveFoods}.`);
//     }
// }
// console.log(person.sayHi());

// ACTIVITY 2
// const pet = {
//     petName: "Bentley",
//     typeOfPet: "Shitzu",
//     ageOfPet: 5,
//     colourOfPet: "Brown and White",
//     eating(){
//         return (`Your pet ${this.petName} is eating.`)
//     },
//     drinking() {
//         return (`Your pet ${this.petName} is drinking water.`)
//     }
// }
// console.log(pet.eating());
// console.log(pet.drinking());

// Activity 3 - need help with this activity but here is my attempt

const coffeeShop = {
    food: "Crisps",
    drinks:"Smoothies",
    branch: "Marge's Cafe",
    drinksWithPrices: [
        "Cannned Drinks", 0.50,
        "Any cup of coffee", 3.50,
        "Iced Drinks", 4.50,
        "Smoothies", 3.50
    ],
    foodWithPrices: [
        "Sandwiches", 4.00,
        "Crisps" , 1.00,
        "Cake slice", 0.50,
        "Pastries", 2.00
    ],
    drinksOrdered(drinks){
        for (let i = 0; i < this.drinksWithPrices.length; i++){
            if (drinks == this.drinksWithPrices[i]){
                console.log(`You ordered a ${drinks} and it will cost ${this.drinksWithPrices[i+1]}`);
            }
        }
    },
    foodOrdered(food){
        for (let j = 0; i < this.foodWithPrices.length; j++){
            if (food == this.foodWithPrices[j]){
                console.log(`You have ordered a ${food} and the price is ${this.foodWithPrices[j+1]}`);
            }
        }
        
    }
}
console.log(coffeeShop.drinksOrdered);
console.log(coffeeShop.foodOrdered);
