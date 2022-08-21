function sumToForLoop(n) {
  let result = n;

  for (i = n; i > 0; i--) {
    result += n - i;
  }

  return result;
}
console.log(sumToForLoop(1));
console.log(sumToForLoop(2));
console.log(sumToForLoop(3));
console.log(sumToForLoop(4));
console.log(sumToForLoop(100));

function recursiveSumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + recursiveSumTo(n - 1);
  }
}

console.log(recursiveSumTo(1));
console.log(recursiveSumTo(2));
console.log(recursiveSumTo(3));
console.log(recursiveSumTo(4));
console.log(recursiveSumTo(100));

function arithmeticProgression(n) {
  return n * ((n + 1) / 2);
}

console.log(arithmeticProgression(1));
console.log(arithmeticProgression(2));
console.log(arithmeticProgression(3));
console.log(arithmeticProgression(4));
console.log(arithmeticProgression(100));
