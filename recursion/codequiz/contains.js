function contains(obj, value) {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }

  return false;
}

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, "foo");
console.log(hasIt, doesntHaveIt);
