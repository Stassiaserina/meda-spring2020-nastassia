var myFirstVar = 1000;

var yearsLeft = 1000;

//Units in meters
var buildingHeightmeters = 100;

var humanAge = 16;

var humanAgeDays = 5840;

// Bad name.
var x = "Super Important";

//Equal sign, everything on the right happens first.
var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 - 10;

//When using variable names on the right side of the equal sign, you are calling for the valu and then you are running the operators, and finally you are storing the final value into the variable total.
var total = sum + product;
var total = 1050 + 2500;

console.log(total);


//var radius = 5000;

//Looked at the built-in Math Library of Javascript.
var radius = 40;

var diameterOfCircle = 2 * radius;
//var perimeterOfCircle = 3.14159265359 * diameterOfCircle.

//Math.PI
var perimeterOfCircle = Math.PI * diameterOfCircle;

console.log("The diameter of the circle with a radius of " + radius 
= " is " + diameterOfCircle + ". The perimeter of the circle is " + perimeterOfCircle);

//Rounds to the nearest whole number.
var rounded = Math.round(3.14);

console.log(rounded);
//Harder way to do/see
console.log( Math.round(3.14));

//Round up
var roundedUp = Math.ceil(45.1);

//Round down
var roundedDown = Math.floor(45.9);

//Math.random() returns a value between 0 and .9infinity
// We add 1 so minimum is now 1, and we multiply 1000 so maximum is 1000.9
var someNumber = ( Math.random() * 1000 ) + 1;

// or use the existing variable:
// someNumber = Math.floor(someNumber);
//We floor the random number so decimals are removed.
var roundedRandomNumber = Math.floor
(someNumber);

//Print random number.
console.log(roundedRandomNumber);

