/* javascript string.slice() method */

// The slice() method of string values extracts a section of this string and returns it as a new string, without modifying the original string.

//slice(indexStart)
//slice(indexStart, indexEnd)

{
    // let str = 'This is javascript string method'
    //         // 01234567890123456789012345678901
            
    // let result = str.slice(8)

    // console.log(result)

    // let result1 = str.slice(10,-10)
    // console.log(result1)
}

/* javascript string.substring() */

// The substring() method of string values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// substring(indexStart);
// substring(indexStart, indexEnd);

{
    //  let str = 'This is javascript string method'
    //          // 01234567890123456789012345678901

    // let result1 = str.substring(10);
    // console.log(result1);

    // let result2 = str.substring(8, -10)
    // console.log(result2);

}

/* Javascript string.concat() method */

// The concat() method of string values concatenates the string arguments to this string and returns a new string.

// concat()
// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* ..., */ strN)

{
    // let str1 = 'this';
    // let str2 = 'is javascript'
    // let str3 = 'string method!'

    // let result = str1.concat(str2);
    // console.log(result);

    // let result2 = str1.concat(str3 , str2);
    // console.log(result2);
}

/* Javascript String.startsWith() / string.endsWith() */

// The startsWith() method of string values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

// The endsWith() method of string value determines whether a string ends with the characters of this string, returning true or false as appropriate.

// startsWith(searchstring)
// startsWith(searchstring, position)

// endsWith(searchstring)
// endsWith(searchstring, endposition)

{
    let str = ' this is javascript string method! '
    //         01234567890123456789012345678901234

    // let result1 = str.startsWith(' ');
    // console.log(result1);

    // let result2 = str.startsWith(' ',10);
    // console.log(result2);

    // let result3 = str.endsWith(' ');
    // console.log(result3);

    // let result4 = str.endsWith('!',34);
    // console.log(result4);
}

/* javascript string.indexOf() method */

// The indexOf() method of string values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returs the first occurrence of the specified substring at an index greater than or equal to the specified number.

// The lastIndexOf() method of string values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

// indexOf(searchstring)
// indexOf(searchstring , position)

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

{
    // let str = 'hi, i am javascript am !'
    // //         012345678901234567890123

    // let result1 = str.indexOf('am')
    // console.log(result1);

    // let result2 = str.indexOf('am', 7)
    // console.log(result2);

    // let result3 = str.lastIndexOf('am');
    // console.log(result3);

    // let result4 = str.lastIndexOf('am', 23);
    // console.log(result4);
}

/* javascript string.padstart() / string.padend() */

// The padstart() method of string values pads this string with another string (multiple times,if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

// The padEnd() method of string values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.


{
    // let str = 'this is padstart method!'
    //         // 123456789012345678901234

    // let result1 = str.padStart(30 , '0');
    // console.log(result1);

    // let result2 = str.padEnd(30 , 'avi');
    // console.log(result2);
}

/* Javascript string.repeat() */

// The repeat() method of string values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

// repeat(count)

{
    // let str = 'Hello'

    // let result = str.repeat(10)

    // console.log(result);
}

/* Javascript string.toUppercase() / string.toLowercase Method */

{
    // let str = 'Hello';

    // let result1 = str.toLocaleLowerCase();
    // let result11 = str.toLowerCase();

    // console.log(result1);
    // console.log(result11);

    // let result2 = str.toLocaleUpperCase();
    // let result22 = str.toUpperCase();

    // console.log(result2);
    // console.log(result22);
}

/* Javascript string.split() Method */

// The split() method of string values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substings into an array, and returns the array.

// split(separator)
// split(separator, limit)

{
    // let str = 'hello'
    // let result = str.split('',2);
    // console.log(result);
}

/* Javascript str.valueOf() method */

// the valueOf() method of string values returns this string value.

// valueOf()

{
    // let str1 = 'hello'
    // let str2 = new String('hello')

    // let result1 = str1.valueOf()
    // console.log(result1);
    // console.log(typeof result1);

    // let result2 = str2.valueOf()
    // console.log(result2);
    // console.log(typeof result2);

    // console.log(typeof str1);
    // console.log(typeof str2);

}

{
    // replaceAll()
    // replace()

    // let string = 'string are useful for holding data that can be represent in text form. some of the most-used operations on string';

    // // console.log(string.replace(/string/,"data"));
    // console.log(string.replaceAll('string',"our data"))
}