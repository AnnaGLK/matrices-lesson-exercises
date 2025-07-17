/* Write your code below */
// Your constructor should invoke the generateMatrix method, using parameters received from the instance.

class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.matrix = this.generateMatrix(rows, cols);
  }
  generateMatrix(rows, cols) {
    let count = 1;
    const matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(count++);
      }
      matrix.push(row);
    }

    return matrix;
  }
  get(rowNum, colNum) {
    return this.matrix[rowNum][colNum];
  }
  alter(rowNum, colNum, value) {
    this.matrix[rowNum][colNum] = value;
  }
  print() {
    // for (let row of this.matrix) {
    //   console.log(row.join("\t"));
    // }
    this.matrix.forEach(row => {
    if (Array.isArray(row)) {
      console.log(row.join(' '));
    } else if (typeof row === 'object') {
      console.log(Object.values(row).join(' '));
    }
  });
  }
  printRow(rowNum) {
    for (let val of this.matrix[rowNum]) {
      console.log(val);
    }
  }
  printColumn(colNum) {
    for (let i = 0; i < this.rows; i++) {
      console.log(this.matrix[i][colNum]);
    }
  }
  findCoordinate(value) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        // console.log(this.matrix[y][x]);
        if (this.matrix[y][x] === value) {
          //   let obj = { x, y };
          //    return obj;
          return { x, y };
        }
      }
    }
    return `${value} not found`;
  }
}

let m = new Matrix(3, 4);
console.log("/-------m.print();--------/");
m.print();

console.log("/-------m.alter(0, 0, m.get(y, x));--------/");
console.log("before alter " + m.get(0, 0));
m.alter(0, 0, m.get(1, 1));
console.log("after alter " + m.get(0, 0));

console.log("/-------m.printColumn(x);--------/");
m.printColumn(0); //prints 6, 5, 9 (separate lines)

console.log("/-------m.printRow(y);--------/");
m.printRow(0); //prints 6, 2, 3, 4 (separate lines)

console.log("/-------m.findCoordinate(var)--------/");
console.log(m.findCoordinate(12)); //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)); //prints {x: 2, y: 1}
console.log(m.findCoordinate(21)); //prints "21 not found"

//You can paste the code from the lesson below to test your solution

/* Do not remove the exports below */
module.exports = Matrix;
