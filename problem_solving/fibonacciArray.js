// 0 1 1 2 3 5 8 13 21 34 55 89.....

(function fibWithArray(length) {
  let series = [0, 1];
  let currentData;
  for (let i = 2; i < length; i++) {
    currentData = series[i - 1] + series[i - 2];
    series.push(currentData);
  }
  console.log(series);
})(7);

// fibWithArray(7);
