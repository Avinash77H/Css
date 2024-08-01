// map => key - value

// let data = new Map(); // declare empty map

// declare map and define value

// let data = new Map([
//     ['hello',100],
//     ['world',200],
//     ['john',300],
//     ['peter',400]
// ]);

// console.log(data);
// console.log(data.size);

// data.set('anuj',500);
// console.log(data);

// console.log(data.get('world'));

// console.log(data.has('world'));

// data.delete('peter');
// console.log(data.entries());


/* forEach method */

// let txt = "";
// data.forEach((val, key) => {
//     txt += key + " ----> " + val + "\n";
// });

// console.log(txt);





/************************ set  ************************/

// let data = new Set([1,2,3,4, 'Hello']);

// data.add(5);
// console.log(data.size);
// console.log(data.values());
// console.log(data.entries());
// console.log(data.has('hell'));
// data.delete('Hello');
// data.clear();
// console.log(data);



/*** shalow copy & Deep copy ***/

let data = [11,22,33,44,55];

// let abc = data;
let abc = [...data];

data.pop();
abc.unshift(99);
console.log(data);
console.log(abc);