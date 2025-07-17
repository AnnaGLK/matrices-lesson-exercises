/* Write your code below */
const Matrix = require("./Matrix");

class TicTacToeMatrix extends Matrix {
  constructor() {
    super(3, 3); // Initialize a 3x3 matrix
  }

  loadBoard() {
    this.matrix = [];

    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(".");
      }
      this.matrix.push(row);
    }

    this.rows = 3;
    this.cols = 3;
  }

  play(rowNum, colNum, player) {


    const symbol = player === 1 ? "x" : "o";

    if (this.matrix[rowNum][colNum ] !== ".") {//prevents a player from playing on a position that's already been played.
    console.log("Invalid move! Cell already occupied.");
    return;
  }

    this.matrix[rowNum][colNum ] = symbol;

    const winRow = this.matrix[rowNum].every((cell) => cell === symbol);
    const winCol = this.matrix.every((row) => row[colNum ] === symbol);
    const winCross1 =
      this.matrix[0][0] === symbol &&
      this.matrix[1][1] === symbol &&
      this.matrix[2][2] === symbol;
    const winCross2 =
      this.matrix[0][2] === symbol &&
      this.matrix[1][1] === symbol &&
      this.matrix[2][0] === symbol;

    if (winRow || winCol || winCross1 || winCross2) {

      this.print()
      console.log(`Congratulations Player ${player}`);
      this.loadBoard(); // When the game is over, reset the board to all dots
    }
  }
}

//You can paste the code from the lesson below to test your solution
let board = new TicTacToeMatrix();
board.loadBoard();

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1)

board.print();

/* Do not remove the exports below */
module.exports = TicTacToeMatrix;
