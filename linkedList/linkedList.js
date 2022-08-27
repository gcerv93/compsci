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

  const toString = () => {
    let headNode = head;

    if (headNode) {
      let string = `( ${headNode.value} )`;

      while (headNode.nextNode) {
        headNode = headNode.nextNode;
        let nextString = `( ${headNode.value} )`;
        string += " -> " + nextString;
      }

      console.log(string);
    }
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  return { getHead, getTail, append, prepend, size, toString, at };
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
console.log(list.size());
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
list.toString();
// console.log(list.size());
// console.log(list.getHead(), list.getTail());
console.log(list.at(5));
console.log(list.at(12));
