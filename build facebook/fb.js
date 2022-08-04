var database = [
{

	username: "Siddiq",
	password: "super",
}

];

var newsFeed = [

{
	username: "Ahmed",
	timeline: "so tired from all of friends",
},

{

  username: "Haroon",
	timeline: "so tired from all of friends",   

 }

];

var userNamePrompt = prompt("whats your username");
var passwordPrompt = prompt("whats your password");

function signIn(user, pass){

  if (user === database[0].username && 
  	  pass === database[0].password) {

   console.log(newsFeed);

  }
  else {

  	alert("sorry you eneterd wrong info");
  }

}
signIn(userNamePrompt, passwordPrompt);
