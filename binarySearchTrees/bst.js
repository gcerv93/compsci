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
          tree.left = tree.left.left;
        } else if (tree.left === null) {
          tree.data = tree.right.data;
          tree.right = tree.right.right;
        } else {
          let inorderSuccessor;
          let rightChild = tree.right;
          let parent = rightChild;

          while (rightChild) {
            if (rightChild.left !== null) {
              rightChild = rightChild.left;
            } else {
              inorderSuccessor = rightChild;
              if (inorderSuccessor.right) {
                parent.left = inorderSuccessor.right;
              } else if (inorderSuccessor.right === null) {
                tree.right = null;
              }
              rightChild = null;
            }
          }

          tree.data = inorderSuccessor.data;
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

  const inorder = (tree, func, result = []) => {
    if (tree === null) return;

    inorder(tree.left, func, result);
    func ? result.push(func(tree.data)) : result.push(tree.data);
    inorder(tree.right, func, result);

    return result;
  };

  const preorder = (tree, func, result = []) => {
    if (tree === null) return;

    func ? result.push(func(tree.data)) : result.push(tree.data);
    preorder(tree.left, func, result);
    preorder(tree.right, func, result);

    return result;
  };

  const postorder = (tree, func, result = []) => {
    if (tree === null) return;

    postorder(tree.left, func, result);
    postorder(tree.right, func, result);
    func ? result.push(func(tree.data)) : result.push(tree.data);

    return result;
  };

  const height = (tree) => {
    if (tree === null) return -1;

    let leftHeight = height(tree.left);
    let rightHeight = height(tree.right);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  const depth = (node) => {
    let nodeDepth = 0;
    let tree = root;

    while (tree) {
      if (tree === node) return nodeDepth;

      node.data > tree.data ? (tree = tree.right) : (tree = tree.left);

      nodeDepth += 1;
    }
  };

  const isBalanced = (tree) => {
    if (tree === null) return 1;

    let leftHeight = height(tree.left);
    let rightHeight = height(tree.right);

    if (
      leftHeight - rightHeight <= 1 &&
      isBalanced(tree.left) &&
      isBalanced(tree.right)
    )
      return true;

    return false;
  };

  const rebalance = (tree) => {
    let treeArray = inorder(tree.root);
    tree.root = buildTree(treeArray);
  };

  let root = buildTree(array);

  return {
    root,
    insertNode,
    find,
    deleteNode,
    levelOrder,
    inorder,
    preorder,
    postorder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

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

console.log("Balanced:", tree.isBalanced(tree.root));
console.log();

console.log("Level:", tree.levelOrder());
console.log();

console.log("Pre:", tree.preorder(tree.root));
console.log();

console.log("Post:", tree.postorder(tree.root));
console.log();

console.log("In:", tree.inorder(tree.root));
console.log();

tree.insertNode(200);
tree.insertNode(500);
tree.insertNode(356);
tree.insertNode(499);
prettyPrint(tree.root);

console.log();

console.log("Balanced:", tree.isBalanced(tree.root));
console.log();

tree.rebalance(tree);
prettyPrint(tree.root);
console.log();

console.log("Balanced:", tree.isBalanced(tree.root));
console.log();

console.log("Level:", tree.levelOrder());
console.log();

console.log("Pre:", tree.preorder(tree.root));
console.log();

console.log("Post:", tree.postorder(tree.root));
console.log();

console.log("In:", tree.inorder(tree.root));
console.log();
