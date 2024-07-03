/*  javascript statement*/

/*
    if statement
    if ...else statement
    if ...else if statement
    switch statement
*/

 
//The if Statement

//Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// Syntax
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

// The else Statement

// Use the else statement to specify a block of code to be executed if the condition is false.

// if (condition) {
//   //  block of code to be executed if the condition is true
// } else {
//   //  block of code to be executed if the condition is false
// }

// Example

// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }



// The else if Statement



// Use the else if statement to specify a new condition if the first condition is false.

// Syntax
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }

// example

// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }




/** Switch **/ 


// Use the switch statement to select one of many code blocks to be executed.

// Syntax

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

//  how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


// Example

//  Note:- The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }