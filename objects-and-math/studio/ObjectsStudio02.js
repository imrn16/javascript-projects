// Code your orbitCircumference function here:

let altitude = 2000;
let speed = 28000;

function orbitCircumference(radius) {
  return Math.round(2*Math.PI*radius)
}

console.log(orbitCircumference(altitude))

// Code your missionDuration function here:

function missionDuration(numOrbits, radius, speed) {
  return Math.round((numOrbits*orbitCircumference(radius))/speed*100)/100

}

console.log(`The mission will travel ${orbitCircumference(altitude)}km around the planet, and it will take ${missionDuration(5, altitude, speed)} hours to complete`)

missionDuration(5, altitude, speed)

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
	return arr[Math.round(Math.random() * 5)];
}

// Code your oxygenExpended function here:

function oxygenExpended(numOrbits, candidate, radius, speed) {
let duration = missionDuration(numOrbits, radius, speed)
let oxygen = Math.round(candidate.o2Used(duration)*1000)/1000;

console.log(`${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} of oxygen.`)
}



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };

 oxygenExpended(3, candidateA, altitude, speed)
 
 let crew = [candidateA,candidateC,candidateE];
 