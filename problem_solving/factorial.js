// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// 6! = 6 * 5! = 6 * 120 = 720
// 0! = 1
function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  console.log(result);
}

factorial(6);
