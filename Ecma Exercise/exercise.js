//question 1
// let + const
const a = 'test';
let b = true;
let c = 789;

console.log(a);

//question 2
// Destructuring

let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;

console.log(person);

//question 3
// Object properties
let a = 'test';
let b = true;
let c = 789;

var okObj = { 
  a,
  b,
  c
};
console.log(okObj);


//question 4

// Template strings
//var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


const firstName = 'Siddiq';
const cityName = 'haripur';

const message = `Hello  ${firstName} have I met you before? I think we met in ${city} last summer no???;`

console.log(message);

// question 5

// default arguments
// default age to 10;

const isValidAge = (age = 10) => age;

// question 6

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol('This is my first Symbol')

// question 7
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


const whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) 
=> (username && location)? "I am not lost":"I am totally lost!" 






 