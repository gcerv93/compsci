const nodeFactory = (data) => {
  return {
    data: data,
    left: null,
    right: null,
  };
};

const treeFactory = (array) => {
  const sortAndRemoveDups = (arr) => {
    let sorted = arr.sort((a, b) => a - b);

    let result = [];
    sorted.forEach((num) => {
      if (!result.includes(num)) {
        result.push(num);
      }
    });

    return result;
  };

  const buildTree = (arr) => {
    let arrSorted = sortAndRemoveDups(arr);

    if (arrSorted.length === 0) {
      return null;
    }

    let start = 0;
    let end = arrSorted.length - 1;
    let mid = Math.floor((start + end) / 2);

    const root = nodeFactory(arrSorted[mid]);

    root.left = buildTree(arrSorted.slice(0, mid));
    root.right = buildTree(arrSorted.slice(mid + 1));

    return root;
  };

  const insertNode = (value) => {
    const newNode = nodeFactory(value);

    let tree = root;
    while (tree) {
      if (value > tree.data) {
        if (tree.right === null) {
          tree.right = newNode;
          return;
        }

        tree = tree.right;
      } else if (value < tree.data) {
        if (tree.left === null) {
          tree.left = newNode;
          return;
        }

        tree = tree.left;
      }
    }
  };

  const root = buildTree(array);

  return {
    root,
    insertNode,
  };
};

// array data for tree
// [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let tree = treeFactory([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

prettyPrint(tree.root);
tree.insertNode(24);
tree.insertNode(22);
prettyPrint(tree.root);
