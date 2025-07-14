/* Write your code below */
let m = new Matrix(3, 4)
m.print()


m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Matrix

