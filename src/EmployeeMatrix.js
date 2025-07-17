/* Write your code below */
const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix {
  constructor(rows, cols) {
    super(rows, cols);
  }
  loadData(salaryData) {
    this.matrix = salaryData;
    this.rows = salaryData.length;
    this.cols = Object.keys(salaryData[0] || {}).length;
  }

  getEmployees(department) {
    const result = [];
    for (let employee of this.matrix) {
      if (employee.department === department) {
        result.push(employee.name);
      }
    }

    return result;
  }

  getTotalSalary(department) {
    let totalSalary = 0;
    for (let employee of this.matrix) {
      if (employee.department === department) {
        totalSalary += employee.salary;
      }
    }

    return totalSalary;
  }
}
//You can paste the code from the lesson below to test your solution

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
m.print();

console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
/* Do not remove the exports below */
module.exports = EmployeeMatrix;
