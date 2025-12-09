function sum(a, b) {
  //   const result = a + b;
  return [a + b, a - b];
}

function result_test(c, d) {
  const data = sum(c, d);
  const calculation = data - 4;
  console.log(calculation);
}

result_test(3, 8);
