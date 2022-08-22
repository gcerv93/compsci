function replicate(reps, num) {
  if (reps <= 0) return [];

  let result = [];

  result.push(num);

  return result.concat(replicate(reps - 1, num));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
