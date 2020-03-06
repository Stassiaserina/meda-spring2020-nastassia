const fs = require("fs");

var arguments = process.argv;

// console.log("Contents of process.argv: ", arguments);













function wordCount () {
    var textArray = testText.split(" ");

// console.log(textArray);
console.log("The text: " + testText + " has a total of  " + textArray.length + " word(s) in it. ");
}


wordCount("what is today? I just woke up!");
wordCount("Meet me @ fourth ave.");
wordCount("You owe me $12.95");




// var testText = "we learned javascript today, took a test, and the teacher was happy";

/* Copied and place into function above.

var textArray = testText.split(" ");

console.log(textArray);
console.log("The text: " + testText + " has a total of  " + textArray.length + " word(s) in it. ");
*/





wordCount(`A backtick in computer science represents a “shell” form of command structure that some call a “double operator.” Essentially, the use of backticks allows for evaluating a string as part of a general command. It may be used in computing languages like Perl or other types of code.`);


var withArray = withNL.split(" ");
var withoutArray = withoutNLs.split(" ");

console.log






var arguments = process.argv


// console.log("Contents of process.argv: ", arguments);



function wordCount(testText) {
    var textArray = testText.split(" ");
    //console.log(textArray);    
    console.log("The text has a total of " + textArray.length + " character(s) in it.");
}


var textToTest = process.argv[4];
var mode = process.argv[2];
var types = process.argv[3];



if (type = "text" || type == "txt") {

} else if (type == "file") {

    if (mode == "words" || mode == "word" || mode == "Words" || mode == "Words") {
        wordCount(textToTest);
    } else if (mode = "characters") {
        charCount(testToText);
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

} else if (type == "file") {

    // Mode function to read files.
    // This function returns a string of the contents of the file you read.
    // fs.readFileSync("filepath to file", "utf8");

    var test = fs.readFileSync ("filetotest.txt", "utf8"); 

    

    if (mode == "words" || mode == "word" || mode == "Words" || mode == "Words") {
        wordCount(textToTest);
    } else if (mode = "characters") {
        charCount(testToText);
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

    
} else {

    console.log("The type of data can only be 'text' or 'file'.");
}







/*
if (mode == "words" || mode == "word" || mode == "Words" || mode == "Words") {
    wordCount(textToTest);
} else if (mode = "characters") {
    charCount(testToText);
} wlse {
    console.log("The only options for this program is 'words' or 'characters' for the second argument.");
}
*/


// ================================================================

// We are telling Node to include the FS library.
const fs = require("fs");

// We grab the values that were typed in the terminal and store them in the arguments variable.
var arguments = process.argv;

// console.log("Contents of process.argv: ", arguments);

// Definitions of functions

// Function 1: wordCount will count the amount of words that are in the string provided in the parameter.
function wordCount(testText) {
    var textArray = testText.split(" ");
    console.log("The text has a total of " + textArray.length + " word(s) in it.");
}

// Function 2: charCount will count the amount of characters that are in the string provided in the parameter.
function charCount(testText) {
    var textArray = testText.split("");
    console.log("The text has a total of " + textArray.length + " characters(s) in it.");
}

// Individual variables holding important parts from the terminal command.

// The actual file or text to test.
var textToTest = process.argv[4];

// Either words or characters
var mode = process.argv[2];

// Either file or string
var type = process.argv[3];

// If the mode is text then run...
if (type == "text" || type == "txt") {


    // An if statement that then tests whether we want to count words or characters.
    if (mode == "words" || mode == "word" || mode == "Word" || mode == "Words") {
        wordCount(textToTest);
    } else if (mode == "characters") {
        charCount(textToTest);
    // If there is no value of words or characters then we tell the user what the options are.
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

    // Test if the mode is file, if it is, then run...
} else if (type == "file") {

    // Node function to read files.
    // This function returns a string of the contents of the file you read.
    // fs.readFileSync("filepath to file", "utf8");
    var text = fs.readFileSync(textToTest, "utf8");

    // Check if the mode is words or characters.
    if (mode == "words" || mode == "word" || mode == "Word" || mode == "Words") {
        // If it is words, then run the wordCount function.
        wordCount(text);
    } else if (mode == "characters") {
        // If it is characters, run the charCount function.
        charCount(text);
    } else {
        // Tell the user that we can only do characters or words.
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }


} else {
    // They probably mispelled the mode, or they are new to the program.
    console.log("Welcome to Paragraph Reader.\nYou can load in a string or file and test for the amount of words or characters.\nExample for loading a file and testing for words:\n'node preader.js words file filetotest.txt'\nExample for strings testing characters:\nnode preader.js characters text 'text to test'");
    console.log("Error: The type of data can only be 'text' or 'file'.");
}