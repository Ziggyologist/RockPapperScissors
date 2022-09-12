let score;
let winner;
let playerChoice;
let playerIcon;
let computerChoice;
let computerIcon;
const user = {
  score: 0,
};
const computer = {
  score: 0,
};
const playerIcons = document.querySelectorAll("#player_icons .fas");
const computerIcons = document.querySelectorAll("#computer_icons .fas");
const icons = document.querySelectorAll(".fas");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerC = document.querySelector("#playerChoice");
const computerC = document.querySelector("#computerChoice");
const winnerPlayer = document.querySelector("#player_winner");
const winnerComputer = document.querySelector("#computer_winner");
const resetBtn = document.querySelector("#refresh");

const themeIcon = document.querySelector(".theme i");
const themeBtn = document.querySelector("button");

const computerChooses = function () {
  randomNum = Math.floor(Math.random() * 3);
  computerChoice = computerIcons[randomNum].id;
  computerIcon = computerIcons[randomNum];
  computerIcon.style.color = "var(--computer-primary)";
};

const chooseWinner = function (optPlayer, optComputer) {
  if (optPlayer === "playerRock" && optComputer === "computerRock") winner = "";
  if (optPlayer === "playerRock" && optComputer === "computerPaper")
    winner = optComputer;
  if (optPlayer === "playerRock" && optComputer === "computerScissors")
    winner = optPlayer;
  if (optPlayer === "playerScissors" && optComputer === "computerScissors")
    winner = "";
  if (optPlayer === "playerScissors" && optComputer === "computerPaper")
    winner = optPlayer;
  if (optPlayer === "playerScissors" && optComputer === "computerRock")
    winner = optComputer;
  if (optPlayer === "playerPaper" && optComputer === "computerPaper")
    winner = "";
  if (optPlayer === "playerPaper" && optComputer === "computerScissors")
    winner = optComputer;
  if (optPlayer === "playerPaper" && optComputer === "computerRock")
    winner = optPlayer;

  if (winner === optPlayer) {
    user.score = user.score + 1;
  }
  if (winner === optComputer) {
    computer.score = computer.score + 1;
  }
  playerScore.textContent = user.score;
  computerScore.textContent = computer.score;
  if (winner === optComputer) {
    winnerComputer.textContent = "winner!";
  }
  if (winner === optPlayer) {
    winnerPlayer.textContent = "winner!";
  }
  if (winner === "") {
    winnerPlayer.textContent = "draw";
    winnerComputer.textContent = "draw";
  }
  console.log(
    `Winner is ${
      winner.includes("computer")
        ? "Computer"
        : winner.includes("player")
        ? "Player"
        : winner === ""
        ? "equality"
        : "unclear"
    }.`
  );
};

const reset = function () {
  icons.forEach(icon => (icon.style.color = "grey"));
  themeIcon.style.color = "var(--refresh)";
  winnerComputer.textContent = "";
  winnerPlayer.textContent = "";
};

const totalReset = function () {
  reset();
  user.score = 0;
  computer.score = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
};

const PlayerChooses = function () {
  playerIcons.forEach(icon => {
    icon.addEventListener("click", function () {
      reset();
      playerIcon = icon;
      playerChoice = icon.id;
      playerIcon.style.color = "var(--user-primary)";
      playerC.textContent = playerChoice.includes("Rock")
        ? "Rock"
        : playerChoice.includes("Paper")
        ? "Paper"
        : "Scissors";
      //   console.log(`Player choice: ${playerChoice}`);
      setTimeout(function () {
        computerChooses();
        // console.log(`Computer choice: ${computerChoice}`);
      }, 100);
      setTimeout(function () {
        chooseWinner(playerChoice, computerChoice);
        // console.log(user, computer);

        computerC.textContent = computerChoice.includes("Rock")
          ? "Rock"
          : computerChoice.includes("Paper")
          ? "Paper"
          : "Scissors";
        celebrate();
      }, 300);
    });
  });
};
let clicked = false;
const changeTheme = function () {
  if (!clicked) {
    document.documentElement.setAttribute("data-theme", "dark");
    lightMode();
    clicked = true;
  } else if (clicked) {
    document.documentElement.setAttribute("data-theme", "light");
    darkMode();
    clicked = false;
  }
};

const celebrate = function () {
  if (user.score === 3 && user.score > computer.score)
    setTimeout(function () {
      alert(
        "You won! Congrats! You can keep on playing or start a new game pressing the refresh button below"
      );
    }, 200);
  // startConfetti();
  // setTimeout(function () {
  //   stopConfetti();
  // }, 10000);
  if (computer.score === 3 && computer.score > user.score) {
    setTimeout(function () {
      alert(
        "You lost but you can keep on playing or start a new game pressing the refresh button below"
      );
    }, 200);
  }
};

resetBtn.addEventListener("click", totalReset);
// Themes
function lightMode() {
  themeIcon.classList.replace("fa-sun", "fa-moon");
}
function darkMode() {
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeBtn.addEventListener("click", changeTheme);
PlayerChooses();
// _______________________
