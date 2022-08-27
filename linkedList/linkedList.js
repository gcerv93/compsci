const listFactory = () => {
  let head = null;
  let tail = null;

  const append = (value) => {
    const newNode = createNode(value);

    if (head === null && tail === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  };

  const prepend = (value) => {
    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };

  const size = () => {
    let headNode = head;

    if (headNode) {
      let count = 1;

      while (headNode.nextNode) {
        count += 1;
        headNode = headNode.nextNode;
      }

      return count;
    } else {
      return 0;
    }
  };

  const at = (index) => {
    let headNode = head;
    let iCount = 0;

    while (headNode) {
      if (iCount === index) {
        return headNode;
      }

      headNode = headNode.nextNode;
      iCount += 1;
    }

    return "Node not found";
  };

  const pop = () => {
    let headNode = head;
    let prevNode;

    while (headNode) {
      if (headNode.nextNode === null) {
        if (!prevNode) {
          head = null;
          tail = null;
          return;
        }
        prevNode.nextNode = null;
        tail = prevNode;
      }

      prevNode = headNode;
      headNode = headNode.nextNode;
    }
  };

  const contains = (value) => {
    let list = head;

    while (list) {
      if (list.value === value) {
        return true;
      }

      list = list.nextNode;
    }

    return false;
  };

  const toString = () => {
    let headNode = head;

    if (headNode) {
      let string = `( ${headNode.value} )`;

      while (headNode.nextNode) {
        headNode = headNode.nextNode;
        let nextString = `( ${headNode.value} )`;
        string += " -> " + nextString;
      }

      return string;
    }
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  return {
    getHead,
    getTail,
    append,
    prepend,
    size,
    toString,
    at,
    pop,
    contains,
  };
};

function createNode(val) {
  return {
    nextNode: null,

    value: val,

    getValue() {
      return value;
    },
  };
}

let list = listFactory();
console.log(list.size()); // 0
list.prepend(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(-1);
list.prepend(-2);
list.prepend(-3);
list.prepend(-4);
list.prepend(-5);
console.log(list.toString()); // String of nodes, from -5 to 5
// console.log(list.size());
// console.log(list.getHead(), list.getTail());
console.log(list.at(5)); // Node value of 0
console.log(list.at(12)); // Node not found
list.pop();
console.log(list.contains(5)); // false, just got popped off the list
list.pop();
console.log(list.toString()); // Last 2 nodes deleted
console.log(list.contains(0)); // true
