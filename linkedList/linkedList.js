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

  const toString = () => {
    if (head) {
      let string = `( ${head.value} )`;

      while (head.nextNode) {
        head = head.nextNode;
        let nextString = `( ${head.value} )`;
        string += " -> " + nextString;
      }

      console.log(string);
    }
  };

  return { head, tail, append, toString };
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
