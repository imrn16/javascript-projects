// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (
	astronautCount <= 7 &&
	// add logic below to verify all astronauts are ready
	astronautStatus == "ready" &&
	// add logic below to verify the total mass does not exceed the maximum limit of 850000
	totalMassKg <= maximumMassLimit &&
	// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
	fuelTempCelsius >= -300 &&
	fuelTempCelsius <= -150 &&
	// add logic below to verify the fuel level is at 100%
	fuelLevel === "100%" &&
	// add logic below to verify the weather status is clear
	weatherStatus === "clear"
) {
	// Verify shuttle launch can proceed based on above conditions
	preparedForLiftOff = true;
	console.log("All systems are a go! Initiating space shuttle launch sequence.");
	console.log("---------------------------------------------------------------");
	console.log(`Date: ${date}`);
	console.log(`Time: ${time}`);
	console.log(`Astronaut Count: ${astronautCount}`);
	console.log(`Crew Mass: ${crewMassKg} kg`);
	console.log(`Fuel Mass: ${fuelMassKg} kg`);
	console.log(`Shuttle Mass: ${shuttleMassKg} kg`);
	console.log(`Total Mass: ${totalMassKg} kg`);
	console.log(`Fuel Temperature: ${fuelTempCelsius} C`);
	console.log(`Weather Status: ${weatherStatus}`);
	console.log("---------------------------------------------------------------");
	console.log("Have a safe trip astronauts!");
} else {
	preparedForLiftOff = false;
	console.log("Shuttle Launch failed.");
}
