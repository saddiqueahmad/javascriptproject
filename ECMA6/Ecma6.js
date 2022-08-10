const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {

	let wizardLevel = true;
	console.log('inside', wizardLevel);
};

console.log('outside', wizardLevel);


// let + const
const a = 'test';
let b = true;
let c = 789;

console.log(a);

let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(eyeColor);