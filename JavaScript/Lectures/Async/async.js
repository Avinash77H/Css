// javascript async/await

// we use the async keyword with a function to represent that the function is an asychronous function. the async function return a promise.

{

// async function name(parameter1,parameter2,....,parameterN){
//   // //statement 
//  }
    
    // name - name of the function
    // parameters - parameters that are passed to the function 

}

// Async 

// The async keyword is used before the function to represent that the function is asynchronous.

{
    // async function example

    //  async function f(){
    //     console.log('Async funcion');
    //     return Promise.resolve("skillQode");
    // }

    // f();
    // console.log(f());
    // f().then(data => console.log(data));
    // console.log(f().then(data => console.log(data)));
}


// this function returns a promise, you can use the chaining method then()

{
    // async function f(){
    //     console.log('Async function');
    //     return Promise.resolve(1);
    // }

    // f().then(function(result){
    //     console.log(result)
    // });
}

// JavaScript await Keyword

// The await keyword is used inside the async function to wait for the asynchronous operation.

// The syntax to use await is

{
    // let result = await promise;
}

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. 

{
    // let promise = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve(1)
    //     },4000);
    // });

    // // // async function

    // async function asyncFunc(){
    //     // /// wait until the promise resolve
    //     console.log('run first because below code wait promise is resolved')
    //     let result = await promise;
    //     console.log(result + 15);
    //     console.log('hello');

    // }

    // // // calling the async function
    // asyncFunc();

    //  // // You can use await only inside of async functions.
}

// a Promise object is created and it gets resolved after 4000 milliseconds. Here, the asyncFunc() function is written using the async function.

// The await keyword waits for the promise to be complete (resolve or reject).

// hello is displayed only after promise value is available to the result variable.

// In the above program, if await is not used, hello is displayed before Promise resolved.

// This can be useful if there are multiple promises in the program.

{
    // let promise1 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve("promise 1")
    //     },2000);
    // });

    // let promise2 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve("promise 2")
    //     },4000);
    // });

    // let promise3 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve("promise 3")
    //     },6000);
    // }); 

    // async function asyncFunc(){
    //     let result1 = await promise1;
    //     let result2 = await promise2;
    //     let result3 = await promise3;

    //     console.log(result1);
    //     console.log(result2);
    //     console.log(result3);
    // }


    // asyncFunc();
    //  // // In the above program, await waits for each promise to be complete.
}


// Error Handling.

// While using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error. 

{
    // asyncFunc().catch(
    //     // catch error and do something
    // )
}

// The other way you can handle an error is by using try/catch block.

{
    // let promise = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         reject('promise reject')
    //     },3000);
    // });

    // async function asyncFunc(){
    //     try{
    //         let result = await promise;
    //         console.log("try block ",result);
    //     }
    //     catch(error){
    //         console.warn("catch block",error);
    //     }
    // }

    // asyncFunc();

    //     // we have used try/catch block to handle the errors. If the program runs successfully, it will go to the try block. And if the program throws an error, it will go to the catch block.
}

// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

// Note: These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await. 

