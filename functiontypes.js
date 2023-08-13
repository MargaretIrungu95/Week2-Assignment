// ACTIVITY 1
// let n = 5;

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(n));


// // ACTIVITY 2
// let orderCount = 2;
// let topping = "Olives";
// let base = "Barbeque";

// const takeOrder = (topping, base) => {
//     console.log(`For order number ${orderCount} - Pizza ordered has a topping of ${topping} with a base of ${base}.`);
//     for(let i = 0; i < orderCount.length; i++){
//     console.log(orderNo[i]);
//     }
// }
// takeOrder(topping, base, orderCount);

// // ACTIVITY 3
// // CASH MACHINE CHALLENGE
const cashMachine = {
    pin: 9852,
    balance: 2000,
    withdraw(amount,pin){
        if (pin != this.pin){
            console.log("The pin you have entered is not correct. Please try again.");
            return;
        }
        if (amount <= 0){
            console.log("Invalid amount please try again.");
            return;
        }
        if (amount > this.balance){
            console.log(`${this.balance} is your balance. Please insert an amount within these limits.`);
            return;
        }
        this.balance -= amount
            console.log(`Successful withdrawal. Your remaining balance is ${this.balance}.`);
    }
};
cashMachine.withdraw(200,9852);