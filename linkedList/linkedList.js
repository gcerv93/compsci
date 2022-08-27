const listFactory = () => {
  let head = null;
  let tail = null;

  const append = (value) => {
    const newNode = nodeFactory(value);

    if (head === null && tail === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  };

  const prepend = (value) => {
    const newNode = nodeFactory(value);

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

  const find = (value) => {
    let list = head;
    let index = 0;

    while (list) {
      if (list.value === value) {
        return index;
      }

      list = list.nextNode;
      index += 1;
    }
    return null;
  };

  const insertAt = (value, index) => {
    const newNode = nodeFactory(value);

    if (index === 0) {
      newNode.nextNode = head;
      head = newNode;
      return;
    }

    let list = head;
    let iCount = 0;
    let prevNode;

    while (list) {
      if (iCount === index) {
        prevNode.nextNode = newNode;
        newNode.nextNode = list;
        return;
      } else if (index > find(tail.value)) {
        tail.nextNode = newNode;
        tail = newNode;
        return;
      }

      prevNode = list;
      list = list.nextNode;
      iCount += 1;
    }
  };

  const removeAt = (index) => {
    if (index === 0) {
      head = head.nextNode;
      return;
    }

    let list = head;
    let iCount = 0;
    let prevNode;

    while (list) {
      if (iCount === find(tail.value) && iCount === index) {
        prevNode.nextNode = null;
        tail = prevNode;
        return;
      }

      if (iCount === index) {
        prevNode.nextNode = list.nextNode;
        return;
      }

      prevNode = list;
      list = list.nextNode;
      iCount += 1;
    }

    return "Invalid index";
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
    find,
    insertAt,
    removeAt,
  };
};

function nodeFactory(val) {
  return {
    nextNode: null,

    value: val,
  };
}
