// javascript setTimeout()

// The setTimeout() method executes a block of code after the specified time.The method executes the code only once.

{
    // setTimeout(function , milliseconds);

    // function - a function containing a block of code

    // milliseconds - the time after which the function is executed
}

// The setTimeout() method returns an intervalId,which is a positive integer.

// Display a text Once after 3 second

{
    // program to display a text using setTimeout method

    // function greet(){
    //     console.log('hello world');
    // }

    // setTimeout(greet,3000); //this function take a 3 second for execute code

    // console.log('this message in shown first');


    /* another function */

    // {
    //     let data = () => {
    //         let a = 5;
    //         console.log(a * a);
    //     }

    //     let id = setTimeout(data,3000);
    //     let id1 = setTimeout(data,5000);

    //     console.log(id);
    //     // clearTimeout(id);
    //     console.log(id1);
    //     // clearTimeout(id1);
    // }

  
}



{

    // Display Time Every 3 second

    // function showTime(){
    //     let dataTime = new Date();

    //     let Time = dataTime.toLocaleTimeString();

    //     console.log(Time);

    //     // setTimeout(showTime,3000);
    // }

   


    // showTime();

    // setInterval(showTime,2000);
}


// The setTimeout() method calls the function only once after the time interval (here 3 seconds)

// javascript clearTimeout()

//  the program executes a block of code after the specified thime interval.if you want to stop this fuction call, you can use the clearTimeout() method

// the syntax of clearTimeout() method is 
{
    // clearTimeout(intervalId);
}

// use clearTimeout() Method is 
{
    // let count = 0;

    // function increaseCount(){
    //     count += 1;
    //     console.log(count);
    // }

    // let id = setTimeout(increaseCount,3000);

    // // clearTimeout

    // clearTimeout(id);
    
    // console.log('setTimeout is stopped.');

}


/* you can also pass additional arguments to the setTimeout() method */

{
    // setTimeout(function,millisecond,parameter1,parameter2,....,parameterN);
}

{
    // function greet(name,lastName){
    //     console.log('Hello' + ' ' + name + ' ' + lastName);
    // }

    // setTimeout(greet,2000,'avinash','rakholiya');

}

// javascript promise and promise chaining

// in javascript, a promise is a goood way to handle asynchronous operation. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// 1.pending
// 2.fulfilled
// 3.Rejected

// A promise starts in a pending state.That means the process is not complete. if the operation is succesful, the process ends in a fulfille state.and , if an error occurs. the process ends in a rejected state.

// for example , when you request data from the server by using a promise, it will be in a pending state.when the data arrives successfully, it will be in a fulfilled state. if an error occurs, then it will be in a rejected state.

// create a promise

// To create a promise object, we use the promise () constructor.

{
    // let promise = new promise(function(resolve,reject){
    //     // do something
    // });

    // // The promise() constructor takes a function as an argument.The function also accepts two function resolve() and reject().

    // // if the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.
}

/* program with a promise */

{
    // const count = false;

    // let countValue = new Promise(function(resolve,reject){
    //     if(count){
    //         resolve("there is a count value.");
    //     }
    //     else{
    //         reject("there is no count value");
    //     }
    // });

    // countValue
    // .then((result)=>{console.log(result)})
    // .catch((err)=>{console.warn(err)});

    // console.log(countValue);
}

// javascript promise chaining

// promises are useful when you have to handle more than one asynchronous task, one after another.for that, we use promise chainging.

// you can perform an operation after a promise is resolved using methods then(), catch() and finally().

// javascript then() method

// The then() method is used with the callback when the promise is succesfully fulfilled or resolved.

// the syntax of then() method is

{
    // promiseObject.then(onFulfilled, onRejected);
}

// chaining the promise with then() 

{
    // // return a promise

    // let countValue = new Promise(function(resolve,reject){
    //     resolve("promise resolved");
    // });

    // // executes when promise is resolved successfully

    // countValue
    //     .then(function successValue(result){
    //         console.log(result);
    //     })

    //     .then(function successValue1(){
    //         console.log("you can call mutiple function this way");
    //     });

    // // the then() method is used to chain the function to the promise. the then() method is called when the promise is resolved successfully.

    // // you can chaing multiple when() methods with the promise.

}


// javascript catch() method

// the catch() method is used with the callback when the promise is rejected or if an error occurs.

{
    // // returns a promise

    // let countValue = new Promise(function(resolve,reject){
    //     reject('promised rejected');
    // });

    // // executes when promise is resolved successfully 

    // countValue.then(
    //     function successValue(result){
    //         console.log(result);
    //     },
    // )
    
    // // executes if there is an error 
    // .catch(
    //     function errorValue(result){
    //         console.warn(result);
    //     }
    // );
}

// javascript promise versus callback

// promises are similar to callback functions in a sence that they both can be used to handle asynchronous tasks.

// javascript callback function can also be used to perform synchronous tasks.

// javascript promise

// The sytax is user-friendly and easy to read.

// Error handling is easier to manage.

{
    // api().then(function(result){
    //     return api2();
    // }).then(function(result2){
    //     return api3();
    // }).then(function(result3){
    //     // do any work
    // }).catch(function(error){
    //     // handle any error that may occur before this point
    // });
        
    
}


// javascript callback

// The syntax is difficult to understand.

// Error handling may be hard to manage.

{
    // api(function(result){
    //     api2(function(result){
    //         api3(function(result){
    //             // do work
    //             if(error){
    //                 // do something
    //             }
    //             else{
    //                 // do something
    //             }
    //         });
    //     });
    // });
}


// javascript finally() method

{
    // // you can also use the finally() method with promises. the finally() method gets executed when the promise is either resolved successfully or rejected.

    // // returns a promise

    // let countValue = new Promise(function(resolve,reject){
    //     // could be resolved or rejected
    //     // resolve('promise resolve');
    //     reject('promise rejected');
    // });

    // // add other blocks of code 
    // countValue
    //     .then((data)=>console.log(data))
    //     .catch((data)=>console.warn(err))
    //     .finally(
    //         function greet(){
    //             console.log('this code is executed.');
    //         }
    //     );
}


{
    // function sayName(){
    //     (function hello(){
    //         (function world(){
    //             console.log('world function called');
    //         })();
    //         console.log('Hellow function called');
    //     })();
    //     console.log('sayName function called');
    // }
    // sayName();
}



    /* setInterval() method */

{
    // let count = 0;
    // let intervalID = setInterval(() =>{
    //     console.log(++count);
    // },2000);

    // console.log("interval id: ",intervalID);

    // //clearInterval(intervalID);
}

/********** promise learn by chai with code **********/

// defination:- A promise in javascript is an object can represent evantual completion or failure of an asychronous operation and its resulting value.its providing state forward way to handle sequence of asychrounous tasks.

{

    // let myPromise = new Promise(function(resolve,reject){
        
    //     // do an async task

    //     setTimeout(function(){
    //         console.log('setTimeout function is done.');
    //         resolve();
    //     },3000)

        
    // });

    // myPromise.then(function(){
    //     console.log('promise consumed');
    // });
}

{
    // new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log('async task 2');
    //         resolve();
    //     },2000)
    // }).then(function(){
    //     console.log('async 2 resolved');
    // })
}


{
    // // pass object as an parameter in resolve()
    // let forthPromise = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log('this is forth promise async code');
    //         resolve({username:'arakholiya5@gmail.com',name:'avinash',hobby:'coading'});
    //     },3000)
    // });

    // forthPromise.then(function(para){
    //     console.log(para);
    // });
}

{
    // let promiseFive = new Promise(function(resolve,reject){
    //     let error = true;
    //     if(!error){
    //         resolve({javascript:'is love',password:123});
    //     }else{
    //         reject('error throw in javascript');
    //     }
    // });

    // async function consumePromiseFive(){
    //     try{
    //         const response = await promiseFive;
    //         console.log(response);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // };

    // consumePromiseFive();


}
