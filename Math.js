let score = 0;
let timer = 60;
let correctAnswer = 0;

//////////////////// Function to start timer////////////////////////////////
function startTimer() {
    const timerElement = document.getElementById("num1");
    const interval = setInterval(() => {
      if (timer > 0) {
        timer--;
        timerElement.textContent = timer;
      } else {
        clearInterval(interval);
        endGame();
      }
    }, 1000);
  }
  startTimer();

// Function to generate random math question
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operations = ["+", "-", "*"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  if (operation === "+") correctAnswer = num1 + num2;
  else if (operation === "-") correctAnswer = num1 - num2;
  else correctAnswer = num1 * num2;

  document.getElementById(
    "Operation"
  ).textContent = `What is ${num1} ${operation} ${num2}?`;
}
generateQuestion();



/////////////////////////  Perform  submission /////////////////////////////
document.getElementById("submitBtn").addEventListener("click", () => {
  const userAnswer = Number(document.getElementById("Answer").value);
  if (userAnswer === correctAnswer) {
    score += 10;
    document.querySelector("#num").textContent = score;
  }
  document.getElementById("Answer").value = "";
  generateQuestion();
});

////////////////////// Function to end the game /////////////////////////
function endGame() {
  document.getElementById("Operation").textContent = "Game Over!";
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "block";
}

// Function to restart the game
document.getElementById("restartBtn").addEventListener("click", () => {
  score = 0;
  timer = 60;
  document.getElementById("num").textContent = score;
  document.getElementById("num1").textContent = timer;
  document.getElementById("submitBtn").style.display = "block";
  document.getElementById("restartBtn").style.display = "none";
  generateQuestion();
  startTimer();
});


