'use strict'

/* Selection of elements */
const player0Change = document.querySelector('.player--0')
const player1Change = document.querySelector('.player--1')
const accumulatedScorePlayer0 = document.getElementById('score--0');
const accumulatedScorePlayer1 = document.getElementById('score--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const diceClass = document.querySelector('.dice');
let currentScorePlayer0 = document.querySelector('.current-score');
let currentScorePlayer1 = document.querySelector('.current-score');

/* Starting conditions */
diceClass.classList.add('hidden');
accumulatedScorePlayer0.textContent = 0;
accumulatedScorePlayer1.textContent = 0;
currentScorePlayer0.textContent = 0;
currentScorePlayer1.textContent = 0;

/* New Game Functionality */
newGame.addEventListener('click', function() {
    diceClass.classList.add('hidden');
    accumulatedScorePlayer0.textContent = 0;
    accumulatedScorePlayer1.textContent = 0;
    currentScorePlayer0.textContent = 0;
    currentScorePlayer1.textContent = 0;
})

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
rollDice.addEventListener('click', function() {
  const dice = Math.trunc(Math.random()*6 + 1);
  diceClass.classList.remove('hidden');
  diceClass.src = `images/dice-${dice}.png`;
  // console.log(dice);
  if(dice !== 1){
    currentScore += dice
    // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    if(currentScore >= 99 || scores[activePlayer] >= 99){
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      diceClass.classList.add('hidden');
      holdScore.classList.add('hidden');
      rollDice.classList.add('hidden');
      document.getElementById(`score--${activePlayer}`).textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  } else{
    /* Put switch player element */
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    /* Put switch player element */
    player0Change.classList.toggle('player--active')
    player1Change.classList.toggle('player--active')
  }
})

/* Hold Button */
holdScore.addEventListener('click', function() {
  scores[activePlayer] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Change.classList.toggle('player--active')
  player1Change.classList.toggle('player--active')
  /* Put switch player element */

})

newGame.addEventListener('click', function() {
  /* Switch Player's background to default */
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')

    /* Changes on New Game Button Click */
    currentScore = 0;
    diceClass.classList.add('hidden');
    holdScore.classList.remove('hidden');
    rollDice.classList.remove('hidden');
    document.getElementById(`score--${activePlayer}`).textContent = 0;
     document.getElementById(`score--${activePlayer}`).textContent = 0;
     document.getElementById(`score--${activePlayer}`).textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
})
