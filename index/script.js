document.addEventListener('DOMContentLoaded', () => {
    const cookieButton = document.getElementById('cookie-button');
    const timeLeftDisplay = document.getElementById('time-left');
    const scoreDisplay = document.getElementById('score');

    let score = 0;
    let timeLeft = 10;
    let timer;

    cookieButton.addEventListener('click', () => {
        if (timeLeft > 0) {
            score++;
            scoreDisplay.textContent = score;
        }
    });

    function startGame() {
        timer = setInterval(() => {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(`Time's up! Your final score is ${score}`);
            }
        }, 1000);
    }

    startGame();
});
