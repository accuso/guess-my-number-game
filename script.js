'use strict';

const messageElem = document.querySelector('.message');
const highscoreElem = document.querySelector('.highscore');
const scoreElem = document.querySelector('.score');
const inputField = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const correctNumberElem = document.querySelector('div.number');
const headerElem = document.querySelector('header');
const mainElem = document.querySelector('main');

let secretNumber;
let score;
let highscore = 0;

function settingNewSecretNumber(){ //number between 1 and 20
  secretNumber = Math.floor(Math.random() * (20-1) + 1);
}
function message(content){
  messageElem.textContent = content;
}
function changeBackgroundColor(color){
  headerElem.style.backgroundColor = `${color}`;
  mainElem.style.backgroundColor = `${color}`;
}
function showSecretNumber(){
  correctNumberElem.textContent = secretNumber;
}
function hideSecretNumber(){
  correctNumberElem.textContent = '?';
}
function lowerScore() {
  if (score > 0) {
  score--;
  scoreElem.textContent = score;
  }
}
function loadHighscore() {
  if (highscore < score){
  highscoreElem.textContent = score;
  }
}
function comparingNumbers(){
  let enteredNumber = +inputField.value;
  if (enteredNumber === secretNumber){
    changeBackgroundColor('green');
    showSecretNumber();
    loadHighscore();
    message('Correct number!');
  } else if (enteredNumber > secretNumber){
    message('Too high!');
    lowerScore();
  } else {
    message('Too low!');
    lowerScore();
  }
}
function newGame() {
  inputField.value = '';
  settingNewSecretNumber();
  hideSecretNumber();
  changeBackgroundColor('black');
  score = 20;
  scoreElem.textContent = score;
  message('Start guessing...');
}

againBtn.addEventListener('click', newGame);
checkBtn.addEventListener('click', comparingNumbers);

newGame();