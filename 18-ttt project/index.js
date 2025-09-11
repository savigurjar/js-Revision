const board = document.querySelector(".board");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");

let turn = "X";
let winner = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
let board_array = new Array(9).fill("E");
let gameOver = false;
let totalMoves = 0;

// Check winner
function checkWinner() {
  for (let [i0, i1, i2] of winner) {
    if (
      board_array[i0] !== "E" &&
      board_array[i0] === board_array[i1] &&
      board_array[i1] === board_array[i2]
    ) {
      // Highlight winning cells
      document.getElementById(i0).classList.add("win");
      document.getElementById(i1).classList.add("win");
      document.getElementById(i2).classList.add("win");

      // Show message
      document.getElementById("result-title").innerHTML = `Player ${board_array[i0]} Wins! 🎉`;
      document.querySelector(".result-card").hidden = false;

      gameOver = true;
      return true;
    }
  }
  return false;
}

// Gameplay
function game(event) {
  const element = event.target;

  if (!element.classList.contains("cell") || gameOver) return;
  if (board_array[element.id] !== "E") return; // prevent overwrite

  // Place mark
  element.innerHTML = turn;
  element.classList.add(turn.toLowerCase(), "played");
  board_array[element.id] = turn;
  totalMoves++;

  // Check win
  if (checkWinner()) return;

  // Check draw
  if (totalMoves === 9) {
    document.getElementById("result-title").innerHTML = "It's a Draw! 🤝";
    document.querySelector(".result-card").hidden = false;
    gameOver = true;
    return;
  }

  // Switch turn
  turn = turn === "X" ? "O" : "X";
}

// Reset game
function resetGame() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.innerHTML = "";
    cell.classList.remove("x", "o", "played", "win");
  });

  board_array = new Array(9).fill("E");
  turn = "X";
  gameOver = false;
  totalMoves = 0;
  document.querySelector(".result-card").hidden = true;
  document.getElementById("result-title").innerHTML = "";
}

// Event listeners
board.addEventListener("click", game);

resetBtn.addEventListener("click", resetGame);

startBtn.addEventListener("click", () => {
  resetBtn.disabled = false;
  startBtn.disabled = true;
  resetGame();
});
