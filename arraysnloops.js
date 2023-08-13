// ACTIVITY 1 with stretch
// let favSongs = [
//     "One Name - Naomi Raine",
//     "More than Able - Chandler Moore",
//     "Story I'll tell - naomi Raine", 
// ];
// // favSongs.push("VIP - Naomi Raine", "It's okay - Chandler Moore",);
// favSongs.pop();
// console.log(favSongs);

// ACTIVITY 2 - unshift method moves things on the list to the end and inserts the bracketed item as first on the list.
// let favSongs = [
//         "One Name - Naomi Raine",
//         "More than Able - Chandler Moore",
//         "Story I'll tell - naomi Raine", 
// ];

// favSongs.unshift("Heal this Land - Maverick Music",);
// console.log(favSongs);




//ACTIVITY 1 for assignment.
// let favFilms = [
//     "Conjuring",
//     "Black Panther",
//     "Fast and Furious",
//     "Would You Rather",
//     "Smile",
// ] 
// favFilms.unshift("Beauty and the Beast", "Les Misrables",);
// // console.log(favFilms);
// for(let i =0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// ACTIVITY 2
// const nums = new Set();
// while(nums.size !== 6) {
//   nums.add(Math.floor(Math.random() * 50) + 1);
// }

// console.log([...nums]);
// ... just lists the numbers on the terminal

// ACTIVITY 3
// for (let i = 10; i > 0; i--){
//     console.log(i);
// } 


// ACTIVITY 4 (Not sure why it wont work)
// const films = [
//     "Smile",
//     "Little Mermaid",
//     "Ghostbusters",
//     "Black Panther"
// ];
// for(let i = 0; i < films.length; i++){
//     console.log(films[i]);    
// }
// if (films[2] === "Ghostbuster"){
//     console.log("yay it is Ghostbusters!");
// }else {
//     console.log("Boo! We want Ghostbusters.")
// };


// ACTIVITY 5 (not working as expected either)
// for (let i = 0; i < 6; i++){
//     let randomNumber = Math.floor(Math.random() * 30);
//     if (randomNumber % 7 === 0){
//         console.log(`The random number ${i} is divisible by 7.`);
//     } else{
//         console.log(`The random number ${i} is NOT divisible by 7.`);
//     }
// }

// method 2 (not working as well either need help with this)
// const nums = new Set();
// while(nums.size !== 6) {
//   nums.add(Math.floor(Math.random() * 30) + 1);
//   if (nums % 7 === 0){
//     console.log("The random number is divisible by 7.");
//   }else {
//     console.log("The random number is NOT divisible by 7.");
//   }
// }

// console.log([...nums]);

// ACTIVITY 6
// const bobsFollowers = ["June", "Lois", "Cookie", "Lucious"];
// const hannahsFollowers = ["Arteta", "Martinelli", "Cookie", "Lucious"];

// const mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {

//     for (let j = 0; j < hannahsFollowers.length; j++) {

//         if (bobsFollowers[i] === hannahsFollowers[j]) {

//             mutualFollowers.push(bobsFollowers[i]);
//         }
//     }
// }

// console.log(mutualFollowers);


// ACTIVITY 9
  // FOR WHILE LOOPS //

//   for(let index = 0; index < element.length; index++); // - 1st Condition: "for(where to start; condition check; how to increment the specified condition"
  // 2nd Condition: "(let index" = what we're looping, "= 0;", we're looping something starting with the index value of "0" (i.e. the beginning),
  // 3rd Condition: "index < element.length" serves as a check while the loop is running.
  // If that condition is TRUE, the loop will run. However, once the loop is FALSE,
  // the loop will break and will not execute the code inside of it.
//   console.log(index); // - logging the result of "index" to the terminal
  
  // PROS:
  // - the most conventional way of coding loops
  // - extremely flexible
  
  // CONS: It's easy to get wrong
  
  
      // WHILE LOOPS //
  
    //   const i = 11;  // User input must be a value under 10 for program to run
  
    //   while (i < 10) { // "while (i < 10)" = This is stating that white the user input is under 10, the loop will run
    //       text += "The number is " + i; 
    //       i++;
    //     }
    //     console.log([i]); // Prints result to the terminal
  
        // The loop will run over and over again, an infinite amount of times, as long as the VARIABLE (i) is less than 10
  
        // PROS:
        // - it can run for a long time until the specified condition is met
  
        // CONS: easy to forget that if the condition the result will always be FALSE
        // this ca cause your program to crash (especially on web browsers)
  
  
  
      // DO WHILE LOOPS //
  
  // // Definition of a Do While: the do while statement creates a loop that
  // // executes a specified statement test condition evaluates to FALSE.
  
  // // For Example:
  
  // let result = '';
  // let i = 0;
  
  // do {
  //   i = i + 1;
  //   result = result + i;
  // } while (i < 5);
  
  // // do {"statement"} - The Loop iterates at least once and then reiterates until "i" is not longer less than "5"
  //     // while (condition); - listing numbers UNDER  and UNTIL the value of "5" is the CONDITION
  
  // console.log(result);
  // // Expected output: "12345"
  
  // // PROS:
  // // - quick and easy way to repeat your code without having to type it out over and over again
  // // - works with all browsers
  // // you can easily control the flow of the loop by using "break;" and "continue;" statements
  
  // // CONS:
  // // - it can be verbose (meaning that the loop itself while doing whatever job you need it to,
  // //   can still require a large amount of coding in of itself)
  // // - can be imperative
