const calculator = require("./calculator");
const cal = new calculator();

class Result {
  getSum(a, b) {
    console.log(`sum of ${a} and ${b} is: ${cal.sum(a, b)}`);
  }
  getSub(a, b) {
    console.log(`substraction of ${a} and ${b} is: ${cal.sub(a, b)}`);
  }
  getMultiply(a, b) {
    console.log(`multiply of ${a} and ${b} is: ${cal.multiply(a, b)}`);
  }
  getDiv(a, b) {
    console.log(`division of ${a} and ${b} is: ${cal.div(a, b)}`);
  }
}

const res = new Result();
res.getSum(10, 5);
res.getSub(10, 5);
res.getMultiply(10, 5);
res.getDiv(10, 5);
