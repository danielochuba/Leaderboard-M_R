const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const footer = document.querySelector('footer');

const addScore = async () => {
  const name = nameInput.value;
  const score = scoreInput.value;

  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GKB87zxChox9aRBKjZMc/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to submit score');
    }

    const json = await response.json();

    footer.innerHTML = ` <aside class="post-message display-none" id="post-message">${json.result}</aside>;`;

    setTimeout(() => {
      footer.innerHTML = '';
    }, 5000);
  } catch (error) {
    footer.innerHTML = ` <aside class="post-message display-none" id="post-message">${error}</aside>;`;
  }
  nameInput.value = '';
  scoreInput.value = '';
};

export default addScore;