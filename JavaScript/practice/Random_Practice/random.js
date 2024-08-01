class myClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    hobby(para){
        console.log(this.age + " " + this.name + " " + para);
    }
}

let obj1 = new myClass('avinash',23);
let obj2 = new myClass('ugam',23);

