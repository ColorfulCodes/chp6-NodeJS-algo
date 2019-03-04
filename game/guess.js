const readline = require('readline-sync');

let num;
let level;
let cChoice;
let count;

console.log('Lets play Guess the Number.');

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

function medium() {
  count = 1;
  cChoice = Math.floor((Math.random() * 100) + 1);
  num = readline.question('I have my number. Guess a number between 1 and 100: ');
  while (count <= 3) {
    if (count === 1) {
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return;
      }
    } else if (count === 2) {
      num = readline.question('2 more shots. Guess a number between 1 and 100: ');
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return;
      }
    } else if (count === 3) {
      num = readline.question('Last chance. Guess a number between 1 and 100: ');
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return count;
      }
    }
  }
}

function hard() {
  count = 1;
  cChoice = Math.floor((Math.random() * 1000) + 1);
  num = readline.question('I have my number. Guess a number between 1 and 1000: ');
  while (count <= 3) {
    if (count === 1) {
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return;
      }
    } else if (count === 2) {
      num = readline.question('2 more shots. Guess a number between 1 and 1000: ');
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return;
      }
    } else if (count === 3) {
      num = readline.question('Last chance. Guess a number between 1 and 1000: ');
      count += 1;
      if (cChoice === num) {
        console.log('You got it!');
        return count;
      }
    }
  }
}

function coolGame() {
  level = readline.question('Pick a difficulty level (1,2, or 3): ');

  if (level === '1') {
    easy();
    return;
  } else if (level === '2') {
    // random 1-100
    medium();
    return;
  } else if (level === '3') {
    hard();
    return;
  } else {
    console.log('Invalid entry. Try again: ');
    coolGame();
  }
}

coolGame();
