
// Do While Loops

/*
let yourName;

do{
     yourName = prompt("Who are you");
}while (!yourName);
console.log(yourName);Martins */


//  Nested Loops

    /*
    for (i=1; i<=10; i++){
          console.log(`When you count ${i} you are consecutively incrementing the numbers.`)
          for (j=1; j<=5; j++){
               console.log(`            When you count ${j} you are doing so in base ten.`)
          }
     } */


// Iterating Through arrays with Nested Loops

/*
const daysofThreeWeeks = [["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"],
                          ["Sundays", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                          ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"]];

console.log(daysofThreeWeeks);

     for (x=0; x < daysofThreeWeeks.length; x++){
          console.log(`Week #${x + 1}`);
          const row = daysofThreeWeeks[x];
               for (y=0; y < row.length; y++){
                    console.log(row[y]);
               }
     } */


//  While Loops

 
 /*const firstElement = "hydrogen";

 let guess = prompt("Enter The First Element In The Periodic Table: ")

     while (guess.toLowerCase() !== firstElement){

           guess = prompt("Try Again. Enter The First Element In The Periodic Table: ")

     }

     document.write("You're a Superb Thinker!"); */



     // The Break Keyword: This is a way to escape a loop.

     // let input = prompt("I am going to repeat after you. Please say stop if you want me to stop. ");

     // while (true){

     //      input = prompt(input);

     //       if (input.toLowerCase() === "stop") break;
     // }

     // document.write("Thanks for your time");


// Writing A Guessing Game

/*let maximum = parseInt(prompt("Enter the maximum number: "));

     while (!maximum){
          maximum = parseInt(prompt("Please enter a valid number: "));
     }


     const targetNum = Math.floor(Math.random() * maximum +1);

     let guess = parseInt(prompt("Enter your first guesss: "));
     let attemps = 1;

     while(parseInt(guess) !== targetNum){

          if (guess === 'q') break;
          attemps++;

          if (guess > targetNum) {
               guess = prompt("Too High! Enter a new guess: ");

          } else {
               guess = prompt("Too Low! Enter a new guess: ");
          }
     }

     if (guess === 'q') {

          document.write("Ok You Quit, I Won!!!");

     } else{
           document.write(`Congratulations you won. You guesssed ${attemps} times.`);
     }
*/ 
// Pitfall of code. If a user inputs a character instead of a number their is no regular expression to check for it. 

// For...of Loops

/*const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
*/
// Using a normal loop for iteration:
     /*for(i=0; i < weekDays.length; i++){
           console.log(`Today is ${weekDays[i]}`);
         }*/

// Using a For...of Loop for iteration:
         /*for(let days of weekDays){
          console.log(`Today is ${days}`);
         }*/

//  More Iteration with For...of Loops

// Using For Loops
/*
const daysMonth = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]];*/

    /* for (a=0; a < daysMonth.length; a++){

          console.log(`Week ${a + 1}`);

          const b = daysMonth[a];

          for ( c=0; c < b.length; c++) {

               console.log(`  Today is ${b[c]}`);
          
          }
     }*/

//  Using For...of Loops

     
    /* for(let a of daysMonth){
          for(let b of a){

          console.log(`  Today is ${b}`);

          }
     }*/

     // ASYNCHRONOUS JAVASCRIPT

     

