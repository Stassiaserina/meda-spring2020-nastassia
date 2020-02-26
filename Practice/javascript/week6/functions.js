// Intro to Functions

// Example of functions we have used so far.
console.log();

Math.round();
Math.floor();
Math.ceil();
Math.random();

var currentTime = Date.now();
console.log(currentTime);

// A function that belongs to a class ("library") is called a "Method".
// A variable that belongs to a class ("library") is called a "Property".



// The Syntax Structure of a Function definition.
function nameOfFunction() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}


nameOfFunction();
nameOfFunction();



/*
Similar to CSS Rulesets

selector {
    property: value;
    property: value;
}

*/


nameOfFunction();








function dataType() {
    console.log(102903);
    console.log("Hello World");
    console.log(false);
}

 





//Arguments and Parameters

// Arguments are values/data you give to functions. 

// Parameters take in the data given to functions.

// "hello" is the argument

console.log("hello", 100, true);

// text is the parameter variable that will accept any data that is given to this function.
function takeDataIn(text) {

    console.log(text);
}




takeDataIn("How are you doing?");
takeDataIn("Goodbye!");


function takeDataIn(text1, text2) {
    console.log(text1);
    console.log(text2);
}


takeDataIn("It's a wonderful day to be alive!", "Don't you think?");


//When you are writing parameters you are defining variable.
function adder(number1, number2) {

    var sum = number1 + number2;

    console.log( "The sum of" + number1 + " and " + number2 + " is " + sum );
}

//number1; "is undefined" no relation. Is outside of curly brace.

adder(4000, 19);


