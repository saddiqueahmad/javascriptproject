var list = [

"clean room",
"clean bath",
"clean carpet",
"clean yourself",
"clean Ahmed bhai",

];

for (var i=0; i < list.length; i++) {

	console.log(list[i], i);

}


/* while loop */

var counterOne = 10;
while(counterOne > 0){

   console.log(counterOne);
   counterOne--;

}

/* do-while loop*/

var counterTwo = 10;
do {

   console.log(counterTwo);
   counterTwo--;

}while (counterTwo > 0);

/* foreach loop */

list.forEach(function(list, i) {

 console.log(list, i);

})