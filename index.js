function increment(team, points) {
    let scoreEl = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreEl.innerText);
    scoreEl.innerText = currentScore + points;
}

function newgame() {
    document.getElementById(`guest-score`).innerText = 0
    document.getElementById(`home-score`).innerText = 0
}