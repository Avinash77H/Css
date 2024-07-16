

let today = new Date();

let day = today.getDay();

let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

console.log("today is : ",days[day]);

let hours = today.getHours();

let minutes = today.getMinutes();

let seconds = today.getSeconds();

let meridiam = (hours >= 12)? "PM" : "AM";

hours = (hours >= 12)? hours-12 : hours;

if(hours === 0 && meridiam === 'PM'){
    if(minutes === 0 && seconds === 0){
        hours = 12;
        meridiam = 'Noon';
    }
    else{
        hours = 12;
        meridiam = 'PM';
    }
}

if(hours === 0 && meridiam === 'AM'){
    if(minutes === 0 && seconds === 0){
        hours = 12;
        meridiam = 'MidNight';
    }
}

console.log("Current time : ",hours,meridiam,':',minutes,':',seconds);
