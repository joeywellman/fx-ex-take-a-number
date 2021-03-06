// A local nightclub is having a Battle of the Bands night in a few months. 
// They expect many bands to sign up because the grand prize is $20,000. 
// To make things easier on the nightclub management, they want each band to be assigned a number 
// so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. 
// The function will increment a global variable by one each time it is invoked, 
// and return that number, and the band name concatenated together.

let bandNumber = 1;

// You could write the function this way:
// const takeNumber = (bandName) => `${bandNumber++}. ${bandName}`;

// Or this way:
const takeNumber = function (bandName) {
//     /*
//         Write your awesome code here. 
//         See comments below for what should be returned.
//     */
    return `${bandNumber++}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under);  // This should print "2. Underdogs" in the console

const eagl = takeNumber("Eagles")
console.log(eagl);  // This should print "3. Eagles" in the console

const meta = takeNumber("Metallica")
console.log(meta);  // This should print "4. Metallica" in the console
