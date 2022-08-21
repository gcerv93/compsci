// function fibonacci(n) {
//   if (n < 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

function fibonacci(n) {
  let prev = 1;
  let curr = 1;
  let result = 0;
  for (i = 2; i < n; i++) {
    result = prev + curr;
    prev = curr;
    curr = result;
  }

  return result;
}
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(77));
