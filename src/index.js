module.exports = function getZerosCount(number, base) {
  // your implementation
  let currentNumber;
  let col;
  let g;
  let count = number;
  let time_var = base;
  for (let i = 2; i <= base; i++) {
    if (time_var % i === 0) {
      currentNumber = 0;
      while (time_var % i === 0) {
        time_var = Math.floor(time_var / i);
        currentNumber++;
      };
      col = 0;
      g = number;
      while (g / i > 0) {
        col += Math.floor(g / i);
        g = Math.floor(g / i);
      };
      var timeVar = Math.floor(col / currentNumber);
      if (count > timeVar) {
        count = timeVar;
      }
    }
  }

  return count;
}