let score;
let playerChoice;
let playerIcon;
let computerChoice;
let computerIcon;
const playerIcons = document.querySelectorAll("#player_icons .fas");
const computerIcons = document.querySelectorAll("#computer_icons .fas");

const computerChooses = function () {
  randomNum = Math.floor(Math.random() * 3);
  computerChoice = computerIcons[randomNum].id;
  computerIcon = computerIcons[randomNum];
  computerIcon.style.color = "var(--computer-primary)";
};

playerIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    playerIcon = icon;
    playerChoice = icon.id;
    playerIcon.style.color = "var(--user-primary)";
    console.log(`Player choice: ${playerChoice}`);
    computerChooses();
    console.log(`Computer choice: ${computerChoice}`);
  });
});
