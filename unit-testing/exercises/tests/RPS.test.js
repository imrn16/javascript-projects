const whoWon = require("../RPS.js");

describe("whoWon", function () {
	test("p1 paper, p2 scissor = p2 win", function () {
		let output = whoWon("paper", "scissors");
		expect(output).toBe("Player 2 wins!");
	});

    test("p1 rock, p2 paper = p2 win", function () {
		let output = whoWon("rock", "paper");
		expect(output).toBe("Player 2 wins!");
	});

    test("p1 scissor, p2 rock = p2 win", function () {
		let output = whoWon("scissors", "rock");
		expect(output).toBe("Player 2 wins!");
	});

	test("p1 rock p2 scissor = p1 win", function () {
		let output = whoWon("rock", "scissors");
		expect(output).toBe("Player 1 wins!");
	});

    test("p1 paper p2 rock = p1 win", function () {
		let output = whoWon("paper", "rock");
		expect(output).toBe("Player 1 wins!");
	});

    test("p1 scissor p2 paper = p1 win", function () {
		let output = whoWon("scissors", "paper");
		expect(output).toBe("Player 1 wins!");
	});

    test("p1 = p2 = tie", function(){
        let output = whoWon("rock", "rock");
        expect(output).toBe('TIE!');
     });
 
});
