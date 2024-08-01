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
    // let person = {
    //     firstName : 'Virat',
    //     lastName : 'Kohli',
    //     age : 34,
    //     hobbies : ['Cricket', 'Music', 'Dancing'],
    //     test: function (){
    //         console.log(`Player Info: ${this.firstName} ${this.lastName}.
    //             his age is ${this.age} years old and his hobbies is ${this.hobbies[0]}`);
    //     }
    // }
    // person.test();
}



/** Revision Practice **/

{
    /* function as object */

    // function sumAll(){

    //     console.log(`argument length is: ${arguments.length}`);
    //     let sum = 0;
    //     for(let i = 0; i < arguments.length; i++){
    //         sum += arguments[i];
    //     }
    //     console.log(sum);

        
    // }

    //  sumAll(1,2,3);

    
}

{
    /* rest parameter */

    // function restPara(... args){
    //     return args;
    // }

    // console.log(restPara(2,3,6,8,9));
    // console.log(typeof restPara());
}

{
    /* Generator */

    // function* generator(a , b){
    //     yield 1;
    //     yield  `sum of a and b is : ${a + b}`;
    //     yield 3;
    //     yield 4;
    //     yield "hello";
    //     return "jay shree ram";
    // }

    // let x = generator(5,5);

    // console.log(x.next().value);
    // console.log(x.next().value);
    // console.log(x.next().value);
    // console.log(x.next().value);
    // console.log(x.next().value);
    // console.log(x.next().value);
    // console.log(x.next().value);
}

{
    /* this keyword */

    // let obj ={
    //     name : 'avinash',
    //     age : 23,
    //     intro : function(){
    //         return(`My name is  ${this.name} rakholiya and i am ${this.age} year old `);
    //     }
    // }

    // console.log(obj.intro());
}

/* call method */

{
    // let person = {
    //     sayHello: function(city){
    //         return `${this.name} and ${this.age} 
    //         city is ${city}`
    //     }
    // }

    // let data = {
    //     name : 'virat',
    //     age : 34
    // };

    // let data1 = {
    //     name : 'rohit',
    //     age : 36
    // };

    // console.log(person.sayHello.call(data,'surat'));
}


/* apply method */

// definitely pass argument as a array and method not define in arrow funcion because arrow funciton not support in apply method


{
    // let person = {
    //     sayHello: function (city){
    //         return `${this.name} and ${this.age}
    //          city is : ${city}`
    //     }
    // }

    // let data = {
    //     name : "avinash",
    //     age : 23
    // }

    // let data1 = { 
    //     name : "milan",
    //     age : 24
    // }

    // console.log(person.sayHello.apply(data,['junagadh']));
}


/* bind */

{
    // let person = {
    //     name : 'hardik padya',
    //     age : 20,
    //     sayHello : function (city){
    //         return `${this.name} and ${this.age} , city : ${city}`
    //     }

    // }

    // let data = {
    //     name : 'ishan kishan',
    //     age : 18
    // };

    // console.log(person.sayHello.bind(data,'mumbai')());

}


/* practice section */
