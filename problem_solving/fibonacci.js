// 0 1 1 2 3 5 8 13 21 34 55 89.......

function fibonacci(length) {
  let numOne = 0,
    numTwo = 1,
    currentNumber;

  console.log(numOne, numTwo);

  for (let i = 2; i <= length; i++) {
    currentNumber = numOne + numTwo;
    console.log(currentNumber);
    numOne = numTwo;
    numTwo = currentNumber;
  }
}
fibonacci(7);
