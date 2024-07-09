/* javascript break and continue statement */

/* break statement */

// {
//     for(i = 0; i < 10; i++){
//         if(i == 6){
//             break;
//         }
//         console.log('break loop')
//     }
// }

/* continue statement */

// {
//     for(i = 0; i < 10; i++){
//         if(i == 6){
//             continue;
//         }
//         console.log('break loops');
//     }
// }

/* Nested loop */

{
    // demo:for(i = 0; i < 8; i++){
    //     if(i == 5){
    //         break demo;
    //     }
    //     console.log('Main loop');

    //     for(i ; i < 5 ; i++){
    //         if(i == 2){
    //             continue;
    //         }
    //         console.log('Child loop')
    //     }
    // }
}

/* CallBack Function */

// {
//     function sum(a , b , callback){
//         callback();
//         return a + b;
//     }

//     function callback(){
//         console.log(`This is callback Function`);
//     }

//     console.log(sum(20 , 30 , callback));
// }


// {
//     function sum(a , b){
//         function callback(){
//             console.log(`this is callback function`);
//         }
//         callback();
//         return a + b;
//     }

//     console.log(sum(40,30));
// }


/* IIFE - Immediately Invoked Function Expression*/

// (function(){
//     console.log('Hello IIFE');
// })();

// func = (() => console.log('IIFE'))();

// (function(name){
//     console.log(name)
// })('Hello World!');


/*** javascript string methods ***/

/* String.prototypes */

/* javascript String.trim() */


/*
    trim() / trimStart() / trimEnd()

    The trim() method of string values removes whitespace from both ends of this string and returns a new string, without modifying the original strings.

    The trimStart() method of string values removes whitespace from the beginning of this string and return a new string, without modifying the original string. trimLeft() is an alias of this method.

    The trimEnd() method of string values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is alias of this method.
*/

// {
//     let str = '  Hello Avinash  ';

//     console.log(str.length);

//     let str1 = str.trim();

//     console.log(str1);
//     console.log(str1.length);


//     let str2 = str.trimStart();

//     console.log(str2);
//     console.log(str2.length);

//     let str3 = str.trimEnd();

//     console.log(str3);
//     console.log(str3.length);
// }

/* Javascript String.charAt() / String.charcodeAt()  Methods */

// The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index. 

// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// charAt(index);
// charCodeAt(index);

// {
//     let str = '   Jay Shree Ram   ';

//     let char1 = str.charAt(-5);
//     console.log(char1);

//     let char2 = str.charCodeAt(4);
//     console.log(char2);
// }

/* Javascript String.at()  method */

// The at() method of string values takes an integer value and returns a new string consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative intergers. Negative integers count back from the last string character.

// at(index);

// {
//     let str = 'hello javascript!';
    
//     let At = str.at(-5);
//     console.log(At);
// }

/* Javascript string.includes() Method */

// The includes() method of string values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// includes(searchString);
// includes(searchString , position);

{
    let str = 'Javascript string include!';

    let Include = str.includes('J');
    console.log(Include);

    let Include1 = str.includes('s' , 11);
    console.log(Include1);
}