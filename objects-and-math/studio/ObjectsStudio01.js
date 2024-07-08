// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
	return arr[Math.round(Math.random() * 5)];
}

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

let randomArr = [];
let usedVal = [];

while (randomArr.length < 3) {
	let val = selectRandomEntry(idNumbers);
	if (!usedVal.includes(val)) {
		randomArr.push(val);
		usedVal.push(val);
	}
}

console.log(randomArr);

console.log(selectRandomEntry(idNumbers));

// Here are the candidates and the 'animals' array:
let candidateA = {
	name: "Gordon Shumway",
	species: "alf",
	mass: 90,
	o2Used: function (hrs) {
		return 0.035 * hrs;
	},
	astronautID: 414,
};
let candidateB = {
	name: "Lassie",
	species: "dog",
	mass: 19.1,
	o2Used: function (hrs) {
		return 0.03 * hrs;
	},
	astronautID: 503,
};
let candidateC = {
	name: "Jonsey",
	species: "cat",
	mass: 3.6,
	o2Used: function (hrs) {
		return 0.022 * hrs;
	},
	astronautID: 796,
};
let candidateD = {
	name: "Paddington",
	species: "bear",
	mass: 31.8,
	o2Used: function (hrs) {
		return 0.047 * hrs;
	},
	astronautID: 291,
};
let candidateE = {
	name: "Pete",
	species: "tortoise",
	mass: 417,
	o2Used: function (hrs) {
		return 0.01 * hrs;
	},
	astronautID: 599,
};
let candidateF = {
	name: "Hugs",
	species: "ball python",
	mass: 2.3,
	o2Used: function (hrs) {
		return 0.018 * hrs;
	},
	astronautID: 890,
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements:

function buildCrewArray(numbers, animals) {
	let crew = [];
	while (crew.length < 3) {
		for (i = 0; i < animals.length; i++) {
			if (numbers.includes(animals[i].astronautID)) {
				crew.push(animals[i].name);
			}
		}
	}
	console.log(`${crew[0]}, ${crew[1]} & ${crew[2]} are going to space!`);
}

buildCrewArray(randomArr, animals);
