let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

food = food.split(',').sort()
equipment = equipment.split(',').sort()
pets = pets.split(',').sort()
sleepAids = sleepAids.split(',').sort()

console.log(food)
console.log(equipment)
console.log(pets)
console.log(sleepAids)



//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [food, equipment, pets, sleepAids]
console.log(cargoHold)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let num = input.question("Please select a number between 0 and 3.")

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (num < 3 && num > 0) {
    console.log(`The cargo you have selected contains ${cargoHold[num]}`)
} else {
    console.log ('Invalid number')
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let str = ''

if (num < 3 && num > 0) {
    str = input.question("Which item are you searching for?")
    if (cargoHold.toLowerCase().includes(str.toLowerCase()) {
        console.log (`Cabinet DOES contain ${str}`)
    } else {
        console.log (`Cabinet DOES NOT contain ${str}`)
    }
    )
} else {
    console.log ('Invalid number')
}