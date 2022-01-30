'use strict';

//JeongHyun An

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/

//'document.querySelector' is used to select a document object
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 52;
/*
document.querySelector('.guess').value = prompt(
  'Give me a random number between 0 and 20'
);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //better to keep a value here rather than relying on DOM

const setHighScore = function (score) {
  if (score > Number(document.querySelector('.highscore').textContent)) {
    document.querySelector('.highscore').textContent = score + 10;
  }
};

//document.querySelector('.number').textContent = secretNumber;
/*'addEventLister' helps adding an event handler (=function), possible because
/function is an expression*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //let score = Number(document.querySelector('.score').textContent);
  /*this line above re-initialises 'score' by reading it from the launched website. And makes sort of an infinite loop
  as long as the clicks continue. Using 'let' doesn't work in this case*/

  //no input case
  if (!guess) {
    document.querySelector('.message').textContent = 'Invalid Input!';
  }
  //when player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score + 10;
    //accessing CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //updating at the every end of a gam
    /*
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }*/
  }
  //when the guess is higher than the secret number
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
    }
  }
  /* Changes made: refactoring. Sincewhether or not guess > secretNumber was
  determined first, and then whether (score > 1) is true or not.
  Changing order made the code much simpler*/

  //when the guess is lower than the secret number
});

document.querySelector('.again').addEventListener('click', function () {
  //updating highscore only when we hit again. (My approach)
  setHighScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
