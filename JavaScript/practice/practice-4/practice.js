/* 1. Write a program to convert temperatures Celsius into Fahrenheit. */

{
    // function temperature(celsius){
    //     return (celsius * (9/5)+ 32);
    // }

    // let fehrenheit = temperature(1);
    // console.log(fehrenheit);
}


/* 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division. */

{
    // let calculator = (add() , sub() , multi() , div() ) => {
    //     if()
    // };

    // function calculator (a , b){
    //     console.log("sum is : ", a + b);
    //     console.log("subtraction is : ", a - b);
    //     console.log("multiplication is : ",a * b);
    //     console.log("division is : ", a / b);

    // }

    // calculator(10 , 5);

    // /** arrow function ** /

    // calculator = (a , b) => {
    //      console.log("sum is : ", a + b);
    //      console.log("subtraction is : ", a - b);
    //      console.log("multiplication is : ",a * b);
    //      console.log("division is : ", a / b);
    // }

    // calculator(10 , 5);
 }

/* 3. Write a program to find the largest of three numbers. */

{
    // largestNum = (a , b, c) => {
    //     if(a > b && a > c){
    //         console.log("largest number is : ", a);
    //     }
    //     else if(b > a  && b > c){
    //         console.log("largest number is : ", b);
    //     }
    //     else if(c > a && c > b){
    //         console.log("largest number is : ", c);
    //     } 
    // }

    // largestNum(-2.2 , 0.2 , -8.2);
}

/* 4. Write a program to find the factorial of a given number. */

{
    // Factorial = (Num) => {

    //     let Answer = 1;
    //     for(let i = Num; i >= 1; i--){

    //         Answer *= i;
    //     }
    //     return Answer;
    // }

    // let x = Factorial(10);

    // console.log(x);


}

/* 5. Write a program to print the first n terms of the Fibonacci sequence. */

{
    // let a = 0;
    // let b = 1;
    // let c;
    // console.log(a);
    // console.log(b);
    // Fibonacci = (Num) => {
    //     for(let i = 1; i <= Num - 2 ; i++){

           
    //         c = a + b;
    //         a = b;
    //         b = c;
    //         console.log(c);
    //     }
    // }

    // Fibonacci(10);
}

/* 6. Write a program to reverse a given string. */

{
    // ReverseString = (str) => {
    //     const arr = str.split("");
    //     Length = arr.length;

    //     let i = 0;
    //     while(i < (Length/2)){
    //         let temp;
    //         temp = arr[i];
    //         arr[i] = arr[Length-i-1];
    //         arr[Length-i-1] = temp;
    //         i++;
    //     }

    //     console.log(arr);
        
    // }
    // ReverseString("abcde");
}

/* 7. Write a program to check if a string is a palindrome. */

{
   
    // PalidromeString = (str) => {
    //     arr1 = str.split("");
    //     arr2 = str.split("");

    //     Length = arr2.length;

    //     let i = 0;
    //     while(i < (Length/2)){
    //         let temp;
    //         temp = arr2[i];
    //         arr2[i] = arr2[Length-i-1];
    //         arr2[Length-i-1] = temp;
    //         i++;
    //     }

    //     arr3 = arr1.toString();
    //     arr4 = arr2.toString();

        
        
    //     if(arr3 == arr4){
    //         console.log("this is palidrome string");
    //     }
    //     else{
    //         console.log("this is not palidrome string");
    //     }

        
    // }

    // PalidromeString("xxx");
}

/* 8. Write a program to find the sum of the first n natural numbers. */

{
    // sumOfNumber = (N) => {
    //     let sum = 0;
    //     for(let i = 1; i <= N; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }

    // console.log(sumOfNumber(10));
}

/* 9. Write a simple guessing game where the user has to guess a number between 1 and 10. */

{
    // guessNumber = (N) => {
    //     let total = 10;
    //     let difference = total - N;
    //     let Answer = total - difference;
    //     return Answer;
    // }
    // console.log("Your guessing Number is : ",guessNumber(100));
}

/* 10. Write a program to count the number of vowels and consonants in a given string. */

{
    // count = (str) => {
    //     const arr = str.split("");
    //     const length = arr.length;

    //     console.log(arr);
    //     console.log(length);

    //     let Vowels = 0;
    //     let Consonants = 0;

    //     for(let i = 0; i < length; i++){
    //         count++;
    //         if(arr[i] == ('a' || 'e' || 'i' || 'o' || 'u')){
    //             Vowels++;
    //         }
    //         else{
    //             Consonants++;
    //         }
    //     }

    //     console.log("your string contain Number of Vowels is : ",Vowels);
    //     console.log("your string contain Number of Consonants is : ",Consonants);

    // }

    // count("avinash");
}
/* 11. Write a program to check if a year is a leap year or not. */

{
    // leapYear = (year) => {
    //     if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    //         console.log("leap year");
    //     }
       
    //     else{
    //         console.log("not leap year");
    //     }
    // }
    // leapYear(2204);
}

/* 12. Write a JS function that reverse a number. Example x = 15438; */

{
    // function reverseNum(num){
    //     //convert number into string
    //    let numStr = num.toString();
    //    // convert string into array
    //    // reverse the  array
    //    // all element of array join like string
    //    let reverseStr = numStr.split('').reverse().join('');
    //     // convert string into interger
    //    let reverseNumber = parseInt(reverseStr,10);
    //     return reverseNumber;
    // }

    // console.log(reverseNum(12345));
}


/* 13. Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */


{
    // function sortStr(str){
    //     str = str.toLowerCase();

    //    let charArray = str.split('').sort().join('');
    
    //    return charArray;
    // }

    // console.log(sortStr("Avinash"));
}


/* 14. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox' */

{
    // function firstCharCapitalize(str){
    //     wordArray = str.split(' ');
    //     for(let i = 0; i < wordArray.length; i++){
    //         wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    //     }

    //     capitalStr = wordArray.join(' ');

    //     return capitalStr;
        
    // }
    // console.log(firstCharCapitalize('jay shree ram'));
}

/* 15. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

{
    // function longStr(str){
    //     let charArray = str.split(' ');
    //     let newArray = [];
        

    //     for(let i = 0; i < charArray.length; i++){
    //         newArray[i] = charArray[i].length;
    //     }

    //     let count = 0;
    //     for(let i = 0; i < newArray.length; i++){
    //         if(count < newArray[i]){
    //             count = newArray[i];
    //         }
    //     }

    //     for(let i = 0; i < newArray.length; i++){
    //         if(charArray[i].length == count){
    //             return charArray[i];
    //         }
    //     }
        
        
    // }
    // console.log(longStr('Bolo Siyavar Ramchandra ki jay'));
}

/* 16. Write a JavaScript function that checks whether a number is perfect. */

{
    // function perfectNumber(num){
    //     if(num <= 1){
    //         return false;
    //     }

    //     let sum = 0;

    //     for(let i = 1; i <= num / 2; i++){
    //         if(num % i == 0){
    //             sum += i;
    //         } 
    //     }
    //     return sum == num;
    // }

    // console.log(perfectNumber(8128));
}


/***  practice ***/


// let promise = new promise(function(resolve,reject){
// do something
// });


// let checkPromise = new Promise(function(resolve,reject){
//     let count = true;
//     if(count){
//         resolve('print if condition')
//     }
//     else{
//         reject('print else condition')
//     }
// });

// checkPromise
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.warn(err)
// })
// .finally(function greet(){
//     console.log('this code is execute.');
// });

// console.log(checkPromise);


