function all(arr, callback) {
  if (arr.length === 0) return true;

  arrCopy = [...arr];

  if (callback(arrCopy[0])) {
    arrCopy.shift();
    return all(arrCopy, callback);
  } else {
    return false;
  }
}

let allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven);

// Didn't really understand how to approach this, just copied from the site.
