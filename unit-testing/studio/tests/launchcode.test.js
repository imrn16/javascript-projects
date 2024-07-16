// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
	test("organization named nonprofit", function () {
		let output = launchcode.organization;
		expect(output).toEqual("nonprofit");
	});

	test("execdirector named jeff", function () {
		let output = launchcode.executiveDirector;
		expect(output).toEqual("Jeff");
	});

	test("percentCool value", function () {
		let output = launchcode.percentageCoolEmployees;
		expect(output).toEqual(100);
	});

	test("programOffered expect statements", function () {
		let output = launchcode.programsOffered;
		let outputLength = launchcode.programsOffered.length;
		expect(output).toContain("Web Development");
		expect(output).toContain("Data Analysis");
		expect(output).toContain("Liftoff");
		expect(outputLength).toEqual(3);
	});

	test("returns Launch! when divisible by 2", () => {
		expect(launchcode.launchOutput(4)).toBe("Launch!");
	});

	test("returns Code! when divisible by 3", () => {
		expect(launchcode.launchOutput(9)).toBe("Code!");
	});

	test("returns Rocks! when divisible by 5", () => {
		expect(launchcode.launchOutput(5)).toBe("Rocks!");
	});

	test("returns LaunchCode! when divisible by 2 and 3", () => {
		expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
	});

	test("returns Code Rocks! when divisible by 3 and 5", () => {
		expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
	});

	test("returns Launch Rocks! when divisible by 2 and 5", () => {
		expect(launchcode.launchOutput(20)).toBe("Launch Rocks!");
	});

	test("returns LaunchCode Rocks! when divisible by 2, 3, and 5", () => {
		expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
	});

	test("returns Rutabagas! That doesn't work. when not divisible by 2, 3, or 5", () => {
		expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
	});
});
