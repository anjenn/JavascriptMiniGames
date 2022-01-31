'use strict';

const totalScore1 = document.querySelector('#score--0');
const totalScore2 = document.querySelector('#score--1');
const currScore1 = document.querySelector('#current--0');
const currScore2 = document.querySelector('#current--1');
//Resetting the score of both players
const initScore = 0;
totalScore1.textContent = initScore;
totalScore2.textContent = initScore;
//Generating Random Value
let ran = Math.trunc(Math.random() * 6) + 1;
//Player Selection
let playerStatus = 1;
let currScore; // score tracker for each round

const newGame = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.getElementById('dice');

//document.getElementById('dice').src = 'dice-1.png';

const rollOnce = function () {
  ran = Math.trunc(Math.random() * 6) + 1;
  switch (ran) {
    case 1:
      diceImg.src = 'dice-1.png';
      scoring(ran);
      break;
    case 2:
      diceImg.src = 'dice-2.png';
      scoring(ran);
      break;
    case 3:
      diceImg.src = 'dice-3.png';
      scoring(ran);
      break;
    case 4:
      diceImg.src = 'dice-4.png';
      scoring(ran);
      break;
    case 5:
      diceImg.src = 'dice-5.png';
      scoring(ran);
      break;
    case 6:
      diceImg.src = 'dice-6.png';
      scoring(ran);
      break;
  }
};

const resetCurrScores = function () {
  currScore1.textContent = 0;
  currScore2.textContent = 0;
  currScore = 0;
};

const scoring = function (ran) {
  if (ran == 1) {
    alert(`You lost all your points`);
    if (playerStatus == 1) {
      resetCurrScores();
    } else if (playerStatus == 2) {
      resetCurrScores();
    } else {
      alert(`Error: No player was selected.`);
    }
  } else {
    if (playerStatus == 1) {
      currScore += ran;
      console.log(currScore);
      currScore1.textContent = currScore;
    } else if (playerStatus == 2) {
      currScore += ran;
      console.log(currScore);
      currScore2.textContent = currScore;
    } else {
      console.log(`Error: No player was selected.`);
    }
  }
};

diceRoll.addEventListener('click', rollOnce);

holdBtn.addEventListener('click', function () {
  //console.log(playerStatus);
  if (playerStatus == 1) {
    totalScore1.textContent = currScore;
  } else if (playerStatus == 2) {
    totalScore2.textContent = currScore;
  }
  resetCurrScores();
  playerStatus = playerStatus == 1 ? 2 : 1;
});
