function productOfArray(arr) {
  if (arr.length === 0) return 1;

  let arrCopy = [...arr];
  let num = arrCopy.shift();

  return num * productOfArray(arrCopy);
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

// Had an idea of how to approach this from the last question.
