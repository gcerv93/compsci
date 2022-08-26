const listFactory = () => {
  const head = null;
  const tail = null;

  return { head, tail };
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
