/* Javascript Hoisting */

// var with Hoisting
{
    // var a , b , c;

    // var a;
    // var b;
    // var c;

    // a = 10;
    // b = 20;
    // c = 30;

    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// let with Hoisting

{
    // let x , y , z;

    // let x;
    // let y;
    // let z;

    /* above declaration not valid */

    // x = 10;
    // y = 20;
    // z = 30;

    // console.log(x);
    // console.log(y);
    // console.log(z);
}

// const with Hoisting

{
    // const a , b, c // not possible Hoisting

    // const x = 10;
}

 /* Javascript Templet Literals (back-tik) */

//  let i = 'skillqode';

//  {
//     let Subject = 'Javascript!';
//     let Hardness = 'Normal';

//     let String1 = "I Am Learning ${Subject}"

//     console.log(String1);
//     console.log(typeof String1);

//     let String2 = 'i am learning $ {Hardness}';

//     console.log(String2);
//     console.log(typeof String2);


//     /* Template Literals */

//     let String3 = `I Am Learning ${Subject}
//     and It's ${Hardness}`

//     console.log(String3);
//     console.log(typeof String3);

// }

/*  Javascript String Define Method */

// {
//     let String1 = "I `Am ${i}` Learning";   // if pass variable in string then String accept Varibale As a string
//     let String2 = "I 'Am' \n Lear \t ning"; // add single qote
//     let String3 = "I \"Am\" Learning";      // add double qote

//     console.log(String1);
//     console.log(String2);
//     console.log(String3);

//     let String4 = 'I Am Learning';
//     let String5 = 'I \'Am\' Learning';
//     let String6 = 'I "Am" Learning';

//     console.log(String4);
//     console.log(String5);
//     console.log(String6);

//     let String7 = `I \'Am ${i}\' Learning ${i}`;

//     console.log(String7);
// }


    /* DataTypes In JavaScript */

    /* Primitive Datatypes / immutable */

    /*
        String
        Number
        Boolean
        Null
        undefined
        BigInt
        Symbol
        object
    */

    /* non-Premitive DataTypes / mutable */

    /*
        Array
        object
    */

        // var a;
        // console.log(a);

        // console.log(undefined);

        // let x = undefined;
        // console.log(typeof x);
        

        // let y = null == undefined;
        // console.log(y);
        // console.log(typeof y);

        //  y = null === undefined;
        // console.log(y);
        // console.log(typeof y);

        // let x = 'number';
        // let y = 4;
        // let z = 5;

        // console.log(z + z + x + z + z + z);

        // console.log(x * z); // Nan (not a number)

        // console.log(typeof NaN);

        // console.log(x * x);

        // console.log(z * z * x + z * z - z);

        // console.log(((y * z) + x + (x + (x * x))));

        // console.log((y - z) + y * (z + z));


