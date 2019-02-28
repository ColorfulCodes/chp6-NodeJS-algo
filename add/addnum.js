// Turn to class

let readline = require('readline-sync');
let total = 0;


for(let i = 0;i <5; i++){
	let any_num = readline.question("Enter a number: ");

	let converted = parseInt(any_num,10);
	total+= converted

}
console.log("The total is: "+ total)
