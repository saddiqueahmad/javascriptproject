/*examples of function*/

/*example1*/

function sayHello() {

	console.log("Hello, i m siddiq");
}

sayHello();

/*example2*/

var sayBye = function(){

	console.log("bye");
}

sayBye();

/*example3*/

function sing(){

	console.log("lalalalalaalala");
	console.log("lalalalalaalala");
	console.log("lalalalalaalala");
}

sing();

/*example4*/

function sing(song){

	console.log(song);
	
}

sing("lallaallalala");
sing("lallaallalala");
sing("lallaallalala");


/*example5*/

function multiply(a,b){
	return a * b
}

multiply(5,10);

/*example6*/

function addition(a,b){
	return a + b
}

addition(5,10);

/*example7*/


function multiply(a,b){
	if (a > 10 || b > 10) {
		return "thats impossible"
	}
	else{
		return a*b;
	
	}

	return a*b;
}


multiply(5,10);

/*example8*/

function multiply(a,b) {

    return a*b;

}
alert(multiply(3,4));