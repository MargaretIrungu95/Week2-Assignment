// DAY 2 - If/else/switch activities
// ACTIVITY 1 
// let age = 19;
// if(age < 17){
//     console.log("You aren't old enough.");
// } else{
//     console.log("Yes I can serve you.")
// }
// STRETCH
// let age = 14;
// let country = "UK";
// if(age < 17 && country == "UK"){
//     console.log("You aren't old enough.");
// } else{
//     console.log("Yes I can serve you.")
// }

// ACTIVITY 2
let topping = "Olives"

switch(topping){
    case "Pepperoni":
        console.log("This is an important ingredient for my Pizza toppings");
        break;
    case "Olives":
        console.log(`I dont mind ${topping} on my pizza`);
        break;
    default:
        console.log(`${topping} should not be included as a topping on the pizza`);
}