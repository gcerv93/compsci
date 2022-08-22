// returns an array containing that many numbers from the fibonacci sequence.
function fibs(num) {
  let result = [0, 1];

  // start i at 2 to account for the 2 numbers already in the array
  for (i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(fibs(8));
console.log(fibs(13));
console.log(fibs(19));
console.log(fibs(20));

function fibsRec(num, result = [0, 1]) {
  if (num <= 2) return [0, 1];

  let fibs = result.slice(-1)[0] + result.slice(-2, -1)[0];
  result.push(fibs);

  fibsRec(num - 1, result) + fibsRec(num - 2);

  return result;
}

console.log(fibsRec(8));
console.log(fibsRec(13));
console.log(fibsRec(19));
console.log(fibsRec(20));
