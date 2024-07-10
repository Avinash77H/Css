/* data Methods */ 

{
    let date = new Date();
// let date = new Date("2001-01-15");

//year,month,date,hours,minutes,second,millisec.
// let date = new Date(2020,0,5,22,55,11,80);

/* put value in millisecond */
// let date = new Date(123434323234);

// console.log(date);

// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
}

/* get & set */

{
    let date = new Date("2001-01-15");
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDate());
    // console.log(date.getDay());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.getMilliseconds());
    // console.log(date.getTime());
    
    
    // date.setFullYear(2032);
    // date.setMonth(1);
    // date.setDate(29);
    // date.setHours(7);
    // date.setMinutes(0);
    // date.setSeconds(10);
    // date.setMilliseconds(5000);

    // console.log(date);

}

// The getTimezoneOffset() method in JavaScript is used to get the difference, in minutes, between the local time and UTC (Coordinated Universal Time). The date.getTimezoneOffset() returns this difference as a positive or negative value.
console.log(date.getTimezoneOffset());