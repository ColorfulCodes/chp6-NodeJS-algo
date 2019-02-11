let readline = require('readline-sync');
	let p = false;
	let any_num = readline.question("What is the rate of return? ");
	while (p !== true){
		if (any_num > 0 && isFinite(any_num) === true){
			console.log("It will take " + 72/any_num+ " years to\n"
				+"double your initial investment")
			p =true;
		}
		else{
			console.log("Sorry. That is not a valid input")
			any_num= readline.question("What is the rate of return? ");
	}}
