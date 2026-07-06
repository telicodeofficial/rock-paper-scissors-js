let computerScore = 0;
let userScore = 0;
let attempt = 0;

function computerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) return "Rock";
  if (choice === 2) return "Paper";
  return "Scissor";
}

function userChoice() {
  let choice = prompt("Choose Rock, Paper or Scissor");

  if (!choice) return null;

  choice = choice.toLowerCase();

  if (choice === "rock") return "Rock";
  if (choice === "paper") return "Paper";
  if (choice === "scissor") return "Scissor";

  return null; // invalid input
}

function playGround() {
  let computer = computerChoice();
  let user = userChoice();

  if (!user) {
    console.log("Invalid Input, round skipped ❌");
    return; // important fix
  }

  console.log("Computer:", computer);
  console.log("User:", user);

  if (computer === user) {
    console.log("Game Tie");
  } 
  else if (
    (user === "Rock" && computer === "Scissor") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissor" && computer === "Paper")
  ) {
    userScore++;
    console.log("User wins this round ✅");
  } 
  else {
    computerScore++;
    console.log("Computer wins this round ❌");
  }

  console.log("User Score:", userScore);
  console.log("Computer Score:", computerScore);
}

function gamePlay() {
  for (attempt = 0; attempt < 5; attempt++) {
    playGround();
  }

  console.log("Final Score:");
  console.log("User:", userScore);
  console.log("Computer:", computerScore);

  if (userScore > computerScore) {
    console.log("🏆 Winner: User");
  } else if (computerScore > userScore) {
    console.log("🏆 Winner: Computer");
  } else {
    console.log("🤝 Match Tie");
  }
}

gamePlay()