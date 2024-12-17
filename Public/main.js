const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 10;

// ボールをランダムな位置に移動させる関数
function moveBall() {
    const gameArea = document.getElementById("game-area");
    const maxX = gameArea.clientWidth - ball.clientWidth;
    const maxY = gameArea.clientHeight - ball.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
}

// スコアを増やす処理
ball.addEventListener("click", () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = score;
        moveBall();
    }
});

// タイマー処理
function startGame() {
    const timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(`ゲーム終了！あなたのスコアは ${score} です。`);
            ball.style.display = "none"; // ボールを非表示にする
        }
    }, 1000);

    moveBall();
}

startGame();
