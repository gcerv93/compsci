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

    if (arrSorted.length === 0) return null;

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

  const deleteNode = (value) => {
    let tree = root;
    let prev;

    while (tree) {
      if (value > tree.data) {
        prev = tree;

        tree = tree.right;
      } else if (value < tree.data) {
        prev = tree;

        tree = tree.left;
      } else {
        if (tree.right === null && tree.left === null) {
          if (prev.left === tree) {
            prev.left = null;
          } else if (prev.right === tree) {
            prev.right = null;
          }
        } else if (tree.right === null) {
          tree.data = tree.left.data;
          tree.left = null;
        } else if (tree.left === null) {
          tree.data = tree.right.data;
          tree.right = null;
        }

        tree = null;
      }
    }
  };

  const find = (value) => {
    let tree = root;

    while (tree) {
      if (tree.data == value) return tree;

      value > tree.data ? (tree = tree.right) : (tree = tree.left);
    }

    return "Node not found";
  };

  // iterative
  const levelOrder = (func) => {
    let tree = root;
    let queue = [tree];
    let result = [];

    while (tree) {
      if (func) {
        result.push(func(tree.data));
      } else {
        result.push(tree.data);
      }

      if (tree.left) queue.push(tree.left);

      if (tree.right) queue.push(tree.right);

      queue.shift();

      queue.length === 0 ? (tree = null) : (tree = queue[0]);
    }

    return result;
  };

  const inorder = (tree, result = []) => {
    if (tree === null) return;

    inorder(tree.left, result);
    result.push(tree.data);
    inorder(tree.right, result);

    return result;
  };

  const preorder = (tree, result = []) => {
    if (tree === null) return;

    result.push(tree.data);
    preorder(tree.left, result);
    preorder(tree.right, result);

    return result;
  };

  const root = buildTree(array);

  return {
    root,
    insertNode,
    find,
    deleteNode,
    levelOrder,
    inorder,
    preorder,
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
console.log(tree.find(6345));
console.log(tree.find(6347)); // Node not found
tree.deleteNode(6345);
tree.deleteNode(22);
tree.deleteNode(5); // works with right child

tree.insertNode(323);
tree.deleteNode(324); // works with left child
prettyPrint(tree.root);
console.log(tree.levelOrder());

const funFunction = (x) => x * 5;
console.log(tree.levelOrder(funFunction));
console.log(tree.inorder(tree.root));
console.log(tree.preorder(tree.root));
