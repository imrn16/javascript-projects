function reverse(str) {
	let lettersArray = str.split("");
	let reversedLettersArray = lettersArray.reverse();
	return reversedLettersArray.join("");
}

function reverseCharacters(str) {
	if (typeof str == "string") {
		return str.split("").reverse().join("");
	} else {
		return str.toString().split("").reverse().join("");
	}
}

let word = "123";

console.log(reverseCharacters(word));

function reverseArray(arr) {
	return arr.reverse().map((e) => {
		return e.toString().split("").reverse().join("");
	});
}

let array = ["apple", "potato", "Capitalized Words"];

console.log(reverseArray(array));
