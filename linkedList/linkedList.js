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

  return { head, tail, append, size, toString };
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
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.toString();
console.log(list.size());
