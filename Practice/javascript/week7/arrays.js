var myVAr = "one Item";
var firstDay = "monday";
var secondDay = "tuesday";

// Array Syntax, a collection of data that is surrounded by square brackets.

var daysOfWeek = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturnoday" , "sunday"];


// Requesting a specific value inside of the array:
// Use square brackets after calling the variable with the array.
// Put the index number inside of the square brackets.
// Example myArray[7];


// Arrays are zero-based index, the first item has an index or "address" of 0.
console.log(daysOfWeek[6]);

daysOfWeek[6] = "funday";

console.log(daysOfWeek[6]);

daysOfWeek[12] = "superday";

console.log(daysOfWeek);




// You can mix datatypes in an Array.
// [100, true, "hello"];