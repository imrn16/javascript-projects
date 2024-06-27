function makeLine(size) {
	return (line = "#".repeat(size));
}

//console.log(makeLine(5))

function makeSquare(size) {
	let square = "";

	for (let i = 0; i < size; i++) {
		square += `\n${makeLine(size)}`;
	}
	console.log(square);
}

makeSquare(5);

function makeRectangle(width, height) {
	let rect = "";

	for (let i = 0; i < height; i++) {
		rect += `\n${makeLine(width)}`;
	}
	console.log(rect);
}

makeRectangle(5, 3);

function makeDownwardStairs(height) {
	let stairs = "";
	for (let i = 0; i <= height; i++) {
		let linear = "#".repeat(i);
		stairs += `\n${linear}`;
	}
	console.log(stairs);
}

makeDownwardStairs(5);

function makeSpaceLine(numSpaces, numChars) {
	let space = "_".repeat(numSpaces);

	return `${space}${makeLine(numChars)}${space}`;
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
	let triangle = "";

	for (i = 0; i < height; i++) {
		let spaces = " ".repeat(height - i - 1);
		let hashes = "#".repeat(2 * i + 1);
		triangle += `\n${spaces}${hashes}`;
	}
	return triangle;
}

console.log(makeIsoscelesTriangle(5));

console.log(makeIsoscelesTriangle(5).split(`\n`));

function makeDiamond(height) {
	return `${makeIsoscelesTriangle(height)}\n${makeIsoscelesTriangle(height).split(`\n`).reverse().join(`\n`)}`;
}

console.log(makeDiamond(5));
