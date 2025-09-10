const board = document.querySelector(".board");
let turn = "X"
let totalMoves = 0;
let board_array = new Array(9).fill("E");
const winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
function checkWinner() {
    for (let [index0, index1, index2] of winner) {
        console.log(index0, index1, index2)
        if (board_array[index0] != "E" && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2] && board_array[index2] === board_array[index0]) {
            return 1;
        }
    }
}

function game() {
    const element = event.target;
    // console.log(event.target)
    if (board_array[element.id] === "E") {
        totalMoves++;
        if (turn === "X") {
            element.innerHTML = "X";
            board_array[element.id] = "X";
            turn = "O";
            if (checkWinner()) {
                document.querySelector(".winmsg").innerHTML = "player X won";
                board.removeEventListener("click", game)
                return;
            }

        } else {
            element.innerHTML = "O";
            board_array[element.id] = "O"
            turn = "X";
            if (checkWinner()) {
                document.querySelector(".winmsg").innerHTML = "player O won"
                board.removeEventListener("click", game)
                return;
            }
        }
    }
    // draw logic
    if (totalMoves === 9) {
        document.querySelector(".winmsg").innerHTML = "Match Draw"
    }

}
board.addEventListener("click", game);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    const cell = document.getElementsByClassName("cell")
    Array.from(cell).forEach((value) => {
        value.innerHTML = " ";
        totalMoves = 0;
        turn = "X";
        board_array = new Array(9).fill("E");

        // write ni krne dega reset ke bad to  event listener ko add krna pdhega
        // winnermsg bhi htana
        document.querySelector(".winmsg").innerHTML = " ";
        board.addEventListener("click", game);

    })
})