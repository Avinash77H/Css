// object

// let data = new Object();
// console.log(typeof data);

let data = {
    name : "john",
    age : 25,
    hobbies : ['Music', 'Dance'],
    marks : {
        maths : 25,
        sci : 28,
        eng : 30
    },
    hello : () => ('Hellow Guys.......')
};

// console.log(data);
// console.log(data.hello());
// console.log(data.hobbies[1]);
// console.log(data.marks.sci);
// console.log(data['name']);
// console.log(data['marks']['maths']);
// console.log(data['hobbies'][0]);

// let a = 'marks'
// console.log(data[a]);

/* add new field */

data.new = 'howwwww';

delete data.hello;
// console.log(data);



/*  class */

{
 

    class jsHello{
        constructor(name,age){
            this.name = name;
            this.age = age;
            this.gender = 'Male'
        }
        sayHello(){
            return `My name is ${this.name} and my age {this.age}, gender is : ${this.age}.`
        }
    };

    let abc = new jsHello('john Doe', 25);

    console.log(abc.sayHello());

}