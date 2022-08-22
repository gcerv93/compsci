// returns an array containing that many numbers from the fibonacci sequence.
function fibs(num) {
  let result = [0, 1, 1];

  // start i at 3 to account for the 3 numbers already in the array
  for (i = 3; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(fibs(8));
