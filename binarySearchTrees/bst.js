const nodeFactory = (data) => {
  return {
    data: data,
    leftChild: null,
    rightChild: null,
  };
};

const treeFactory = (array) => {
  return {
    root: buildTree(),
  };
};
