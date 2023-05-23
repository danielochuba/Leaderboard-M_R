import './style.css';
import addScore from './modules/submitScore.js';
import displayScores from './modules/displayScore.js';

// const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('.form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addScore();
  displayScores();
});

refreshBtn.addEventListener('click', displayScores);
