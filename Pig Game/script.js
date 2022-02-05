'use strict';

//Reference - https://pig-game-v2.netlify.app/

/*const score0 = document.querySelector('#score--0');
works the same as
const score0 = document.getElementById('score--0');*/

const totalScore1El = document.querySelector('#score--0');
const totalScore2El = document.querySelector('#score--1');
const currScore1El = document.querySelector('#current--0');
const currScore2El = document.querySelector('#current--1');
//Resetting the score of both players
const initScore = 0;
totalScore1El.textContent = initScore;
totalScore2El.textContent = initScore;
currScore1El.textContent = initScore;
currScore2El.textContent = initScore;
//Generating Random Value
let ran = Math.trunc(Math.random() * 6) + 1;
//Player Selection
let playerStatus = 1;
let currScore = 0; // score tracker for each round
//could use an array instead.
//scores = [0, 0];

const newGame = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
//const diceImg = document.getElementById('dice');
const diceImg = document.querySelector('#dice');
//document.getElementById('dice');
document.getElementById('dice').style.display = 'none';
//diceImg.classList.add('hidden');//same behavior as above

const resetCurrScores = function () {
  currScore1El.textContent = 0;
  currScore2El.textContent = 0;
  currScore = 0;
};

const switchPlayers = function () {
  playerStatus = playerStatus == 1 ? 2 : 1;
  //diceImg.classList.add('hidden');
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  console.log(`player status changed to ${playerStatus}`);
};

const checkIf100 = function () {
  //const temp = playerStatus - 1;
  const totalScoreEl = document.querySelector(`#score--${playerStatus - 1}`);
  console.log(`the score is ${totalScoreEl.textContent}`);
  if (totalScoreEl.textContent >= 100) {
    document
      .querySelector(`.player--${playerStatus - 1}`)
      .classList.add('player--winner');
    alert(
      `Player ${playerStatus} won with a total score of ${totalScoreEl.textContent}!`
    );
  } else {
    console.log(`the score is not yet 100`);
  }
};

holdBtn.addEventListener('click', function () {
  //console.log(playerStatus);
  if (playerStatus == 1) {
    totalScore1El.textContent = Number(totalScore1El.textContent) + currScore;
    checkIf100();
  } else if (playerStatus == 2) {
    totalScore2El.textContent = Number(totalScore2El.textContent) + currScore;
    checkIf100();
  }
  resetCurrScores();
  switchPlayers();
});

const scoring = function (ran) {
  if (playerStatus == 1) {
    console.log(`dice shows ${ran}`);
    currScore += ran;
    console.log(currScore);
    currScore1El.textContent = currScore;
  } else if (playerStatus == 2) {
    console.log(`dice shows ${ran}`);
    currScore += ran;
    currScore2El.textContent = currScore;
  } else {
    console.log(`Error: No player was selected.`);
  }
};

diceRoll.addEventListener('click', function () {
  ran = Math.trunc(Math.random() * 6) + 1;
  document.getElementById('dice').style.display = 'block';

  /*
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src=`dice-${dice}.png`;d
  */

  switch (ran) {
    case 1:
      diceImg.src = 'dice-1.png';
      /*setTimeout(function () {
        alert('After 5 seconds!');
      }, 1000);*/
      alert(`You lost all your points`);
      resetCurrScores();
      switchPlayers();
      //scoring(ran);
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
});

newGame.addEventListener('click', function () {
  resetCurrScores();
  switchPlayers();
  totalScore1El.textContent = 0;
  totalScore2El.textContent = 0;
  document.getElementById('dice').style.display = 'none';
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});
