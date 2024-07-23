//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
	constructor(name, mass, scores) {
		this.name = name;
		this.mass = mass;
		this.scores = scores;
	}

	addScore(score) {
		return this.scores.push(score);
	}

	avgScore() {
		let sum = 0;
		for (let i = 0; i < this.scores.length; i++) {
			sum += this.scores[i];
		}
		return sum / this.scores.length;
	}

    status(val = this.avgScore()) {
        let stat = ''

        if (val >= 90) {
             stat = 'Accepted'
        } else if (val >= 80 ) {
             stat = 'Reserve'
        } else if (val >= 70 ) {
             stat = 'Probationary'
        } else {
             stat = 'Rejected'
        }

        console.log(`${this.name} earned an average test score of ${val}% and has a status of ${stat}.`)
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83)

console.log(bubbaBear.scores)

console.log(merryMaltese.avgScore())

console.log(merryMaltese.status())

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let sum = 0 

while (gladGator.avgScore() <= 80) {
    gladGator.addScore(100)
    sum += 1

}

console.log (`It took ${sum} perfect scores to get ${gladGator.name} to Reserve`)

sum = 0 

while (gladGator.avgScore() <= 90) {
    gladGator.addScore(100)
    sum += 1

}

console.log (`It took ${sum} perfect scores to get ${gladGator.name} to Accepted`)
