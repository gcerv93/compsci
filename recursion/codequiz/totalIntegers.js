function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  let first = arr.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(arr);
}

let seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]);
console.log(seven);
