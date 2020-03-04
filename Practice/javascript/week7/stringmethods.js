// Manually replace the question Mark.

var myString = "Hello there how are you?";

console.log(myString.length);

var myStringArray = myString.split("");  // splits every character ("").  // Spaces sre characters.

console.log(myStringArray);

console.log(myStringArray[23]) = ".";

console.log(myStringArray);

myStringArray.pop();
myStringArray.pop();
myStringArray.shift();
myStringArray.shift();

var fiishedString = myStringArray.join("");

console.log(finishedString);