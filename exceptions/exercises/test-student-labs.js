function gradeLabs(labs) {
	for (let i = 0; i < labs.length; i++) {
		let lab = labs[i];
		try {
			result = lab.runLab(3);
		} catch (e) {
			// console.log("Student "+lab.student+" has not defined the runLab function correctly!");
			result = "Error Thrown";
		}
		console.log(`${lab.student} code worked: ${result} ${result === 27}`);
	}
}

let studentLabs = [
	{
		student: "Carly",
		runLab: function (num) {
			return Math.pow(num, num);
		},
	},
	{
		student: "Erica",
		runLab: function (num) {
			return num * num;
		},
	},
];

let studentLabs2 = [
	{
		student: "Blake",
		myCode: function (num) {
			return Math.pow(num, num);
		},
	},
	{
		student: "Jessica",
		runLab: function (num) {
			return Math.pow(num, num);
		},
	},
	{
		student: "Mya",
		runLab: function (num) {
			return num * num;
		},
	},
];

gradeLabs(studentLabs2);
