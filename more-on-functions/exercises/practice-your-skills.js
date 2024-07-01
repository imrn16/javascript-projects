//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

let anonymous = function (prop) {
	if (typeof prop === "number") {
		return prop * 3;
	} else if (typeof prop === "string") {
		return "ARRR!";
	}
};

console.log(anonymous("3"));

/* Add to your code! Use your function and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let anonArr = function (val) {
	return val.map((indiv) => {
		if (typeof indiv === "number") {
			indiv = indiv * 3;
		} else if (typeof indiv === "string") {
			indiv = "ARRR!";
		}
		return indiv;
	});
};

let arr = ["Elocution", 21, "Clean teeth", 100];

console.log(anonArr(arr));
