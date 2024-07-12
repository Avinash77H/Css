/*** High order function ***/

/* function as object */
{
    // function sumAll(){
    //     let total = 0;
    //     for(let i = 0; i < arguments.length; i++){
    //         total += arguments[i];
    //         // return arguments[1];
            
    //     }
    //     return total;
    // }

    // console.log(sumAll(2,3,4,5,6,8));
}

/* rest Parameter (...) */

{
    // here args is variable
    // function hello(... args){
    //     return args;
    // };

    // console.log(hello(1,2,3,4,5,6));
}

/* Generator */

{
    // function* test(){
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //     yield "test";
    //     return "hello";
    // }

    // let data = test();

    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
}


/* this keyword */

{
    let person = {
        firstName : 'Virat',
        lastName : 'Kohli',
        age : 34,
        hobbies : ['Cricket', 'Music', 'Dancing'],
        test: function (){
            console.log(`Player Info: ${this.firstName} ${this.lastName}.
                his age is ${this.age} years old and his hobbies is ${this.hobbies[0]}`);
        }
    }
    person.test();
}