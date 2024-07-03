/* javascript loops */

/*
    while loop
    do-while loop
    for loop
    for-in loop
    for-of loop
*/

/* while loop */

// while(condition){
//     // statement
//     afterThought;
// }

{
//     // example

//     let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
//   }
}


/* do-while loop */

// do {
//     // code block to be executed
//     // afterThought
//   }
//   while (condition);

// example

{
//     let i = 0;

// do {
//   console.log(i);
//   i++;
// }
// while (i < 9); 
}

/* for loop */

// for(initi; condi; After){
//     // statement
// }

// example

{
   

    // for(i = 0; i < 10; i++){
    //     console.log('Jay Shree Ram');
    // }
}

/* for-in loop */

{
    // let arr = [];
    // console.log(arr);
    // arr[0] = '10';
    // console.log(arr);
    // arr.shift();
    // console.log(arr);
    // arr.lenght = 10;
    // console.log(arr);
    // arr[5] = '10';
    // console.log(arr);

    // let array = [];
    // console.log(typeof array);
    // let arrays = new arrays();
    // console.log(typeof arrays);

    // console.log(array);
    // console.log(arrays);
}

{
    // let obj = {};

    // console.log(obj);
    // obj.key1 = 'skillqode';
    // console.log(obj);
    // console.log(obj.key1);
    // console.log(obj['key1']);
}

// push and unshift value add in array
// pop and shift value remove in array

/* for in loop

The for... in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

*/

// for(variable in object){
//     // statement
// }

{
    let obj = {
        a:10,
        b:20,
        c:30,
        d:[
            {

            }
        ]
    }

    for(let [key,value] in obj){
        console.log(`${key} :${obj[value]}`);
    }
}