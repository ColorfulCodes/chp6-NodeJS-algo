let readline = require('readline-sync');
let any_num = readline.question("What is the rate of return? ");

function finreturn(any_num){
	let p = false;
	while (p !== true){
		if (any_num > 0 && isFinite(any_num) === true){
			// console.log("It will take " + 72/any_num+ " years to\n"
			// 	+"double your initial investment")
			return 72/any_num
			//p =true;
		}
		else{
			console.log("Sorry. That is not a valid input")
			any_num= readline.question("What is the rate of return? ");
	}}
}


module.exports = { finreturn };
