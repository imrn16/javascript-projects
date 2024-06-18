// Declare and assign the variables below
let name = "Determination";
let speed = 17500;
let marsDistanceK = 225000000;
let moonDistanceK = 384400;
let mpk = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof name);
console.log(typeof speed);
console.log(typeof marsDistanceK);
console.log(typeof moonDistanceK);
console.log(typeof mpk);

// Calculate a space mission below

let milesToMars = marsDistanceK * mpk;

let hoursToMars = milesToMars / speed;

let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(daysToMars);

// Calculate a trip to the moon below

let milesToMoon = moonDistanceK * mpk;

let hoursToMoon = milesToMoon / speed;

let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(daysToMoon);

let day = 'thursday'
day = 12
day = 18.4
console.log(day)

console.log(3 ** 3)