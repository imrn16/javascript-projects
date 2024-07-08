let superChimpOne = {
	name: "Chad",
	species: "Chimpanzee",
	mass: 9,
	age: 6,
	move: function () {
		return Math.round(Math.random() * 10);
	},
};

let salamander = {
	name: "Lacey",
	species: "Axolotl Salamander",
	mass: 0.1,
	age: 5,
	move: function () {
		return Math.round(Math.random() * 10);
	},
};

let superChimpTwo = {
	name: "Brad",
	species: "Axolotl Salamander",
	mass: 11,
	age: 6,
	move: function () {
		return Math.round(Math.random() * 10);
	},
};

let beagle = {
	name: "Lacey",
	species: "Axolotl Salamander",
	mass: 14,
	age: 5,
	move: function () {
		return Math.round(Math.random() * 10);
	},
};

let tardigrade = {
	name: "Lacey",
	species: "Axolotl Salamander",
	mass: 0.00000000001,
	age: 1,
	move: function () {
		return Math.round(Math.random() * 10);
	},
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
beagle["astronautID"] = 4;
tardigrade["astronautID"] = 5;

// Add a move method to each animal object

// Create an array to hold the animal objects.

let animalArr = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

// Print out the relevant information about each animal.

animalArr.forEach((animal) => {
	console.log(`${animal.name} is a ${animal.species} with a mass of ${animal.mass}kg. ${animal.name} is ${animal.age} years old and moves at a pace of ${animal.move()}`);
});

// Start an animal race!

function fitnessTest(arr) {
	arr.forEach((animal) => {
		let steps = animal.move();
		let turns = 0;
		let totalSteps = 0;

		while (totalSteps < 20) {
			totalSteps += steps;
			turns++;
		}

		console.log(
			`${animal.name} the ${animal.species} completed the race in ${turns} turns, moving a total of ${totalSteps} steps at a pace of ${steps} steps per turn.`
		);
	});
}

fitnessTest(animalArr);
