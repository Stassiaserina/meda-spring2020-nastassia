var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];

// Update all of these values so we add a 5% bonus if they make less than 50000, or 2.5% if they make more than 50000.


/* STEP ONE

if (employeeSalaries < 50000) {

    console.log("this ran");
}
*/




/*STEP TWO

if (employeeSalaries[0] < 50000) {

    console.log("this is less than 50000");

} else {
    console.log("This is more than 50000");

}
*/



//STEP THREE A

if (employeeSalaries[0] < 50000) {

    console.log("Old salary: " + employeeSalaries[0]);
    
    employeeSalaries[0] = employeeSalaries[0] + (employeeSalaries[0] * .05);

    console.log("New Salary: " + employeeSalaries[0]);

} else {

    console.log("This is more than 50000");

    employeeSalaries[0] = employeeSalaries[0] + (employeeSalaries[0] * .025);

    console.log("New Salary: " + employeeSalaries[0]);

}



/* STEP THREE B

if (employeeSalaries[0] < 50000) {

    console.log("Old salary: " + employeeSalaries[1]);
    
    employeeSalaries[1] = employeeSalaries[1] + (employeeSalaries[1] * .05);

    console.log("New Salary: " + employeeSalaries[1]);

} else {

    console.log("This is more than 50000");

    employeeSalaries[1] = employeeSalaries[1] + (employeeSalaries[1] * .025);

    console.log("New Salary: " + employeeSalaries[1]);
}
*/



// For each item in the employeeSalaries array...

for (var i = 0; i < employeeSalaries.length; i++) {

    //console.log the individual value...
    console.log(employeeSalaries[i]);

// ...assign this value to the salary variable.
    var salary= employeeSalaries[i];


    // Test the salary variable to see whether its above or below 50000.
    if (salary < 50000) {

        console.log("Old Salary: " + salary);

        // If it is below, add a 5% bonus to it.
        salary = salary + (salary * .05);

        console.log("New Salary: " + salary);

          // And update the array with this new value.
          employeeSalaries[i] = salary;

    } else {

        console.log("Old Salary: " + salary);

        // Otherwise add a 2.5% bonus to it.
        salary = salary + (salary + .025);
        console.log("New Salary: " + salary);

        // And update the array with this new value.
        employeeSalaries[i] = salary;

    }

}

// Finaly console log the new salary array.
console.log(employeeSalaries);

//////////////////////////////////////////////////


function salaryBonus(salary, bonus) {

    var actualBonus = salary * bonus;

    var newSalary = salary + actualBonus;

    return newSalary;

}

// Test the function...

var test = salaryBonus(10000, .10);

console.log(test);