// Defines what the pyramidBuilder does. Takes in one argument.
function pyramidBuilder(height) {

    // Holds the height for the pyramid to be built.
    var pyramidHeight;

    // Check if the paramter holds a number or undefined.
    if (height == undefined) {
        // If undefined, then generate a number between 1 and 20 for us.
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    } else {
        // Otherwise height has a number and assign it to the pyramidHeight variable.
        pyramidHeight = height;
    }

    // The string to print, starting with an empty string.
    var pyramidRow = "";

    //Loop for a certain of times, for each time, add a asterisk and then console.log the string.
    for (var i = 0; i < pyramidHeight; i++) {
        pyramidRow = pyramidRow + "*";
        console.log(pyramidRow);
    }
    
    // Once the first half of the pyramid is done, we need to go "down" but we need to break the string into an array.
    var pyramidArray = pyramidRow.split("");

    // Loop through the array, remove the last element of the array (to shorten the asterisks), then combine array into string, and console.log the string.
    for (var i = 0; i < pyramidHeight - 1; i++) {
        pyramidArray.pop();
        pyramidRow = pyramidArray.join("");
        console.log(pyramidRow);
    }

}


// Gets an array built by process.argv and stores in argument's variable.
 var arguments = process.argv;
 console.log(arguments);

 // We grab the third item from the argument's array and store it in height.
 var height = arguments[2];

 // we grab the 4th item from argument's array and convert it to a number then store in loops.
 var loops = parseInt( arguments[3] );


 // Take value of height, convert into a number, put it back into height.
 height = parseInt(height);
 console.log(height);


 // We loop for the amount of loops, and run pyramidBuilder with the appropriate height value.
 for (var i = 0; 1 < 100; i++){
    pyramidBuilder(height);
 }












































































console.log("*");
console.log("**");
console.log("***");
console.log("**");
console.log("*");

                                       // Delimiters
/*
var pyramidRow = "";

console.log(pyramidRow);

pyramidRow = pyramidRow = "*";

console.log(pyramidRow);



for (var i = 0; i < 10; i++) {

    pyramidRow = pyramidRow + "*";

    console.log(pyramidRow);
}
*/


// var pyramidArray =  pyramidRow.split("");


/*
pyramidArray.pop();

pyramidRow = pyramidArray.join("");

console.log(pyramidRow);



pyramidArray.pop();

pyramidRow = pyramidArray.join("");

console.log(pyramidRow);



pyramidArray.pop();

pyramidRow = pyramidArray.join("");

console.log(pyramidRow);

*/




for (var i = 0; i < pyramidHeight; i++) {

    pyramidRow = pyramidRow * "*";

    console.log(pyramidRow);
}



/* Coppied / replaced into the below function pyramidBuilder(pyramidHeight) {}

var randomNumber = (Math.random() * 20) + 1;
randomNumber = Math.floor(randomNumber);



var pyramidRow = "";
var pyramidHeight = randomNumber;


for (var i = 0; i < pyramidHeight; i++) {

    pyramidRow = pyramidRow + "*";

    console.log(pyramidRow);
}




var pyramidArray =  pyramidRow.split("");

for (var i = 0; i < 4; i++) {

    pyramidArray.pop();

    pyramidRow = pyramidArray.join("");

    console.log(pyramidRow);
}

*/


function pyramidBuilder(pyramidHeight) {  

    var randomNumber = (Math.random() * 20) + 1;
    randomNumber = Math.floor(randomNumber);


    if (height == undefined) {
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    } else {
        pyramidHeight = height;
    }



    var pyramidRow = "";


    var pyramidHeight = height;


    for (var i = 0; i < pyramidHeight; i++) {

    pyramidRow = pyramidRow + "*";

    console.log(pyramidRow);
}




var pyramidArray =  pyramidRow.split("");

for (var i = 0; i < 4; i++) {

    pyramidArray.pop();

    pyramidRow = pyramidArray.join("");

    console.log(pyramidRow);
}


}

pyramidBuilder(3);
pyramidBuilder();
pyramidBuilder(3);


for (var i = 0; i < 100; i++) {
    pyramidBuilder();
}







