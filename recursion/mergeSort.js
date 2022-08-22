function merge(a, b) {
  aPointer = 0;
  bPointer = 0;
  let result = [];

  while (aPointer < a.length && bPointer < b.length) {
    // console.log(a, b);
    // console.log(b[bPointer]);
    // console.log(result);
    if (a[aPointer] > b[bPointer]) {
      result.push(b[bPointer]);
      bPointer += 1;
    } else if (b[bPointer] > a[aPointer]) {
      result.push(a[aPointer]);
      aPointer += 1;
      // console.log(result);
    }
  }

  // console.log(a.length, b.length);

  if (aPointer < a.length) {
    result = result.concat(a.slice(aPointer));
  } else if (bPointer < b.length) {
    result = result.concat(b.slice(bPointer));
  }

  // console.log(result);
  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);

  let sorted = merge(mergeSort(left), mergeSort(right));

  return sorted;
}

let list = [3, 4, 2, 1, 7, 5, 8, 9, 0, 6, 11];

console.log(mergeSort(list));
// mergeSort(list);
