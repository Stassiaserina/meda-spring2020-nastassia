var employeeSalaries = [10000, 20000, 30000];

console.log(employeeSalaries[1]);

// var myFirstObject = {jesse: 10000, mark: 20000, sarah: 30000};   OR
var myFirstObject = {"jesse": 10000, "mark": 20000, "sarah": 30000};

console.log(myFirstObject.Jesse);
//console.log(myFirstObject["jesse johns"]);
Math.PI;


//    Escaping characters, this string, if passed to the browser, would write the angle brackets to the screen and not be read as html code.

//   "\<h1\>Hello, this should be an example code on the webpage\</h1\>";



/*
var person = {
    "first_name": "jesse",
    "last_name": "saint",
    "age": 29,
    "address": "200 Happy St. Amazing City, Nebraska 23889",
    "fav_color": "blue",
    "salary": 56000,
    "phone": 4840039829
};
*/


var person = {
    "first_name": "jesse",
    "last_name": "saint",
    "age": 29,
    "address": {
        "street": "200 Happy St.",
        "city": "Amazing City",
        "state": "Nebraska",
        "zip": 23889
    },    

    "fav_color": "blue",
    "salary": 56000,
    "phone": 4840039829
    "months": ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
};

var shortObject = {"something": }

// dot notation, use period and then the property name, no spaces.
console.log(person.last_name);

// bracket notation, similar to array access, useful if properties have spaces in them.
console.log(person["phone"]);

console.log(person.address.city);

console.log(person.months[11]); // for a specific month
console.log(person.months); //for all months

/*
var employeeData = [
    {"first_name": "Dave",
    "fav_things": [
        "TV",
        "Hiking",
        "Soccer"
    ]},
    {},
    {}
]; 
*/      


var employeeData = [
    {"first_name": "Dave",
    "fav_things": ["TV", "Hiking", "Soccer"],
    "myFirstFunctionObject": function () {
        console.log("Hello from inside the employee object!!!");
    }

    ]},
    {},
    {}
]; 



// Properties are variables of objects
                                   // Methods are functions that belong to objects

// for (){}
// if(){}
// function(){}
// ();

employeeData[0].fav_things[1];

employeeData[0].myFirstFunctionObject();




console.log("david".length);
console.log("david".indexOf("i"));
console.log("david".charAt(3));


var myString = "Hello there how are you?";

console.log(myString.length);

var myStringArray = myString.split("");

console.log(myStringArray);