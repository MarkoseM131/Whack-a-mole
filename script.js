const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.querySelector('.score');
const restartButton = document.querySelector('.restart');
const winMessage = document.querySelector('h2');

let score = 0;
let activeMole = null;
let gameInterval = null;

function activateRandomMole() {
    if (activeMole !== null) {
        moles[activeMole].classList.remove('active');
    }

    const index = Math.floor(Math.random() * moles.length);
    activeMole = index;
    moles[index].classList.add('active');
}

moles.forEach((mole, index) => {
    mole.addEventListener('click', () => {
        if (index === activeMole) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            moles[index].classList.remove('active');
            activeMole = null;

            if (score >= 5) {
                winMessage.textContent = 'You Win';
            }
        }
    });
});

function startGame() {
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    winMessage.textContent = '';
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(activateRandomMole, 1000);
}

restartButton.addEventListener('click', startGame);
window.addEventListener('load', startGame);