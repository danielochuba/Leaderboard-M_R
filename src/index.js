import './style.css';
import addScore from './modules/submitScore.js';
import displayScores from './modules/displayScore.js';

const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('.form-input');

document.addEventListener('DOMContentLoaded', () => {
  displayScores();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addScore();
  displayScores();
});

refreshBtn.addEventListener('click', displayScores);