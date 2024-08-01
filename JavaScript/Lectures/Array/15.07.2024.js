// Array -> simlar data store in one variable 

// let data = [];
// let data = new Array('hello','world','skill','Qode');

let data = [-30,-20,-10,0,10,20,30];
// console.log(data);


// console.log(Array.isArray(data));
// console.log(data.length);

// push -> insert into last index

// data.push(60);
// data.pop();
// data.unshift(100);
// data.shift();

// splice(start ,removeCount, ...add);
// data.splice(2,0,500,600,200);
// data.splice(2,1,500,600,200);
// data.splice(2,2,500,600,200);

// const arr = ['avinash' , 'Hardik' , 'tejas' , 'parth'];
// arr.sort(); // char arr sorting

// console.log(data.sort()); // this way not completely sorting

// console.log(data.sort((a,b) => b - a));

// console.log(data.slice(1,5));

// data.reverse();

// let num1 = [11,12];
// console.log(data.concat(num1,[1000,2000]));

// includes => check  element is exist in array or not

// console.log(data.includes(30));

// const maxFun = (para) => {
//     return Math.max.apply(null,para);
// }
// const minFun = (para) => {
//     return Math.min.apply(null,para);
// }

// console.log(maxFun(data));
// console.log(minFun(data));

// console.log(data);


const myArr = [10,30,50,20,40];

// console.log(myArr);

// console.log(myArr.toString());

// console.log(myArr.indexOf(40));

// console.log(myArr.at(2));


// console.log( myArr.join("-"));

// delete myArr[0];
// console.log(myArr[0]);
// console.log(myArr);

// let x = myArr.toSpliced(1,0,'avinash','bhavin','rushik');

// console.log(x);

// const marvel_heroes = ['thor','hulk','ironman'];
// const dc_heroes = ['superman','flash','batman'];

// const new_heroes = marvel_heroes.concat(dc_heroes);

/* spread operator */

// const new_heroes  = [...marvel_heroes, ...dc_heroes];
// console.log(new_heroes);

// const another_array = [1,2,3,[3,3],4,5,[6,6,[100,100,[200,200]]],7,8,9,10];

// const new_another_array = another_array.flat(3);
// console.log(new_another_array);

/* converting in array */
// const new_array = Array.from("avinash");

// console.log(new_array);

// console.log(Array.from({name : 'avinash'})); // return empty array because his not decide which type of array convert means key array or value array

// let team1 = 'a';
// let team2 = 'b';
// let team3 = 'c';

// console.log(Array.of(team1,team2,team3));

/* --> new lecture <-- */

// let array = [10,20,30,40,[50,60,70],80];

// console.log(array);
// console.log(array.flat());

let array1 = [10,90,20,30,40,50,60,80];

// let total = 0;

// array1.forEach((ele) => {
//     total += ele;
// });

// console.log(total);

// let newData = array1.map((ele) => {
//     return ele * 2;
// });

// console.log(newData);

// array1 = array1.filter((ele) => ele <= 30);
// array1 = array1.find((ele) => ele > 50);
// array1 = array1.findIndex((ele) => ele > 50);
// array1 = array1.every((ele) => ele <= 500);
// array1 = array1.some((ele) => ele > 50);
// array1 = array1.reduce((total,ele) => total += ele, 0);
// array1 = array1.reduce((total,ele) => total += ele, 50);
// array1 = array1.reduceRight((total,ele) => total += ele,50);

// let a = array1.entries();
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);

// let array2 = [10,20,30,40,50,60,70,80,90,100];

// console.log(array2.copyWithin(4,0,2));
// console.log(array2.copyWithin(4,0));
