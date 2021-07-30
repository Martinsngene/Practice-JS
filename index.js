
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

 /*
 const firstElement = "Hydrogen";

 let guess = prompt("Enter The First Element In The Periodic Table: ")

     while (guess !== firstElement){

           guess = prompt("Try Again. Enter The First Element In The Periodic Table: ")

     }

     document.write("You're a Superb Thinker!"); */



     // The Break Keyword: This is a way to escape a loop.

     /*
     let input = prompt("I am going to repeat after you. Please say stop if you want me to stop. ");

     while (true){

          input = prompt(input);

           if (input.toLowerCase() === "stop") break;
     }

     document.write("Thanks for your time"); */

     