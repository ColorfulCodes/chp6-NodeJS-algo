const readline = require('readline-sync');

let num;
let cChoice;
let count;

function easy() {
  count = 1;
  cChoice = Math.floor((Math.random() * 10) + 1);
  num = readline.question('I have my number. Guess a number between 1 and 10: ');
  while (count <= 3) {
    if (count === 1) {
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return;
      }
    } else if (count === 2) {
      num = readline.question('2 more shots. Guess a number between 1 and 10: ');
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return;
      }
    } else if (count === 3) {
      num = readline.question('Last chance. Guess a number between 1 and 10: ');
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return count;
      }
    }
  }
}



module.exports = { easy };
