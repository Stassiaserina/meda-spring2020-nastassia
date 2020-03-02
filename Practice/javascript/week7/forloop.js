var counter = 0;

while (10 > counter) {
    // Code to run per loop.
    counter = counter + 1;
    console.log(counter);
    
    //The counter will add a 1 to the existing variable value;
    //counter++;

    // The -- will subtract a 1 to the existing variable value;
    //counter--;
}





// for () {
    // Code to run per loop.
// }


// Inside the parentheses we have three parts: counter, condition, and code that changes the counter. The third part only runs after the code block.
for (var counter = 0; 10 > counter; counter = counter + 1) {

    console.log(counter);
}


var special = 1;

//Outer loop will run for 10 times, for each time we are executing another loop that will run 10 times.
//for (var 1 = 0; i < 10; i ++) {

    // The inner loop that will run once (ten times).
    for (var e = 0; e < 10 ;e++) {
        
         console.log("running! " + special);

           special++;
    
     }
// }


// Write a for loop that console logs every even number up to 48
// Bonus: start from 12.


for (var i = 0; i <= 48; i = i + 1 {
    console.log("Loop #" + i);

    if ( i % 2 == 0) {
        console.log(i);
    } else {
        continue;
    }
    
    //console.log("Crawl, Walk, Run " + special);
}







