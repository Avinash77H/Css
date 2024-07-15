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

const maxFun = (para) => {
    return Math.max.apply(null,para);
}
const minFun = (para) => {
    return Math.min.apply(null,para);
}

console.log(maxFun(data));
console.log(minFun(data));

console.log(data);


