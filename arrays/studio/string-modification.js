const input = require("readline-sync");
let str = "LaunchCode";
let num = 3;

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strTwo = str.split("").slice(0, num).join("");
strTwo = str.split("").slice(num).join("").concat(strTwo);
console.log(strTwo);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The first 3 letters from the string '${str}' were removed and appended to the end, creating '${strTwo}'.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

num = input.question("Enter the number of letters which you would like to move from the front to the end of the word.");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (num > str.length || num < 0) {
    console.log(`The number provided (${num}) was too long or was invalid. A default of '3' was selected`)
    num = 3;

} else return num;
