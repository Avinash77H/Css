/**  interator **/
{
    // let number = [100,200,300];

    // let iter =  number[Symbol.iterator]();

    // // iter.next().value;
    // console.log(iter.next().done);
    // console.log(iter.next().done);
    // console.log(iter.next().done);
}

{
    // let number = [100,200,300,400,500,600,700];

    // let iter = number[Symbol.iterator]();

    // let result = iter.next();

    // while(!result.done){
    //     console.log(result.value);
    //     result = iter.next();
    // }
}


{
    // let str = 'Jay Shree Ram';

    // let iter = str[Symbol.iterator]();

    // let result = iter.next()

    // while(!result.done){
    //     console.log(result.value);
    //     result = iter.next();
    // }
}

{
   /* own create iterator */

//    function numberIterator(arr){
//     let nextNum = 0;
//     return{
//         next(){
//             if(nextNum < arr.length){
//                 return{
//                     value : arr[nextNum++],
//                     done : false,
//                 }
//             }
//             else{
//                 return{
//                     value : undefined,
//                     done : true,
//                 }
//             }
           
//         }
//     }
//    }

//    let numbers = [100,200,300,400,500];

//    let num = numberIterator(numbers);

//    console.log(num.next());
//    console.log(num.next());
//    console.log(num.next());
//    console.log(num.next());
//    console.log(num.next());
//    console.log(num.next());

}

/* function generator */

// function * generator (){
//     console.log('first line print')
//     yield 1;
//     console.log('second line print')
//     yield 'milan';
//     console.log('third line print')
//     yield 3;
//     console.log('fouth line print')
//     yield 'avinash';
// };

// const fun = generator();

// console.log(fun.next());
// // console.log(fun.throw());
// console.log(fun.next());
// console.log(fun.next())


/* second example */

{
    // function* numberGenerator(){
    //     let i = 0;
    //     while(true){
    //       yield i++;
    //     }
    // };

    // const gen = numberGenerator();

    // console.log(gen.next().value);
    // console.log(gen.next().value);
    // console.log(gen.return(333));
    // console.log(gen.next());
    // console.log(gen.throw('this is an error'))
}


/* third example */

{
    // function* numberGenerator(){
    //     try{
    //         yield 1;
    //         yield 2;
    //         yield 3;
    //     }
    //     catch(Error){
    //         console.log('Error Caught :',Error);
    //     }
    // };

    // const gen = numberGenerator();

    // console.log(gen.next().value);
    // console.log(gen.throw(new Error('Something went wrong')));
    // console.log(gen.next());
}