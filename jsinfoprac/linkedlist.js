function printListLoop(list) {
  while (list.value) {
    console.log(list.value);
    if (list.next) {
      list = list.next;
    } else {
      return;
    }
  }
}

function printListRecursive(list) {
  if (list.next === null) {
    console.log(list.value);
    return;
  } else {
    console.log(list.value);
    printListRecursive(list.next);
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(printListLoop(list));
console.log(printListRecursive(list));

function printReverseListLoop(list) {
  let tmp = list;
  while (tmp) {
    tmp = tmp.next;
    if (tmp.next === null) {
      console.log(tmp.value);
      return;
    }
  }
}

console.log(printReverseListLoop(list));
