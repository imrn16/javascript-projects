const checkFive = require("../checkFive.js");

describe("checkFive", function () {
	test("Less than", function () {
		let output = checkFive(4);
		expect(output).toEqual("4 is less than 5.");
	});
	test("Greater than", function () {
		let output2 = checkFive(6);
		expect(output2).toEqual("6 is greater than 5.");
	});
	test("Equal to", function () {
		let output3 = checkFive(5);
		expect(output3).toEqual("5 is equal to 5.");
	});
});
