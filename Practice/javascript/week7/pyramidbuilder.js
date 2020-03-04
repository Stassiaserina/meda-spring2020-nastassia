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







