// Strings in JavaScript

// Creating string

const string = new String('Hello, I am Nahid Parvej');
const string2 = "I am twenty five years old";            // double quotes
const string3 = 'Hey ledy'                                // single quotes

const string4 = `
Hey ${string} and ${string2}
Like this video
`; // bacticks

// console.log(string4);

// String length

const str = "I am a JavaScript Developer";
// console.log(str.length);

//Accesing character

// console.log(str[3]);
// console.log(str.charAt(3));

//Looping

for(let i =0; i<str.length; i++){
    // console.log(str[i]);
}

// Modifying Strings

str[3] = 'p'; // can not do this
// console.log(str.replace("am", "AM"));
// console.log(str.replaceAll('a', 'A'))

// Concat
 
str.concat(' & programmer');
const  newStr = '  hello world   '
//  console.log(newStr.trim());   // trim() - remove white space

// searching
console.log(str.lastIndexOf('e'))
console.log(str.indexOf('r'));

// console.log(str.startsWith('I'));
// console.log(str.endsWith('r'));
// "I am a JavaScript Developer";

console.log(str.substring(13,20))
console.log(str.slice(2,5));






