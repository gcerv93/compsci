const listFactory = () => {
  const head = null;
  const tail = null;

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

  return { head, tail, append };
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
