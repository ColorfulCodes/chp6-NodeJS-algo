let readline = require('readline-sync');
let age = readline.question("Cuantos anos tiene? ");
let resting= readline.question("What is your resting heart rate? ");;
let cal;


console.log("Resting Pulse: "+ resting.toString()+ "     "+"Age: "+ age.toString())
console.log("Intensity     | Rate    ")
console.log("--------------|---------")

for (let i =55; i<= 95; i +=5){
  cal = (((220-age)-resting)*i)+ resting;

  console.log(i.toString()+"%           | "+ cal.toString()+ " bpm")


}
