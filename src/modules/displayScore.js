const table = document.querySelector('.score-table');

const displayScores = async () => {
  table.innerHTML = '';
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GKB87zxChox9aRBKjZMc/scores');
  const data = await response.json();
  data.result.forEach((score) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = `
                    <span class="name">${score.user}</span>  : 
                    <span class="score">${score.score}</span>
                `;
    tr.appendChild(td);
    table.appendChild(tr);
  });
};

export default displayScores;