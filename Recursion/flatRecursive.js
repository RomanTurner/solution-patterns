function flattenExample(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//flat npm package
function flat() {
  var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
  return depth
    ? Array.prototype.reduce.call(
        this,
        function (acc, cur) {
          if (Array.isArray(cur)) {
            acc.push.apply(acc, flat.call(cur, depth - 1));
          } else {
            acc.push(cur);
          }

          return acc;
        },
        []
      )
    : Array.prototype.slice.call(this);
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

//Generator example
function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const arr2 = [1, [2, [3, 4], [[5]]]];
const arr3 = [[1], [2], [3]];
const arr4 = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
const flattened = [...flatten(arr, Infinity)];
const flattened2 = [...flatten(arr2, Infinity)];
const flattened3 = [...flatten(arr3, Infinity)];
const flattened4 = arr3.flat();
console.log(flattened);
console.log(flattened2);
console.log(flattened3);
console.log(flattened4);
console.log([1, 2, 3, [4, 5]].flat(2)); // [1, 2, 3, 4, 5]
