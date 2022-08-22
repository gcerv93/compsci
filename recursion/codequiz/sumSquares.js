function sumSquares(list) {
  if (list.length === 0) return 0;

  let total = 0;
  let item = list.shift();

  if (Array.isArray(item)) {
    total += sumSquares(item);
  } else if (Number.isInteger(item)) {
    total += item * item;
  }

  return total + sumSquares(list);
}

var l = [1, 2, 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400
