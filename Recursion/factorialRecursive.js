function factorial(num) {
  if (num === 0) return 1;
  return num === 1 ? 1 : num * factorial(num - 1);
}
console.log(factorial(6));

//Write a function called power which accepts a base and an exponent. The funcitonality should
//return the power of the base to the exponent. This function should mimic
// Math.pow()

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(4, 2));

//function that takes an array and returns the product of them all
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3]));

//accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(num) {
  return num === 0 ? num : num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));

//accepts a number and returns the nth number in the fib sequence.

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));

//takes a string, returns reversed
function reverse(string) {
  return string.length <= 1 ? string : reverse(string.slice(1)) + string[0];
}

console.log(reverse("blarg"));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
//Given an array and callback, return true if any el in array is returned true from the callback
// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

// function flatten(oldArr) {
//   var newArr = [];
//   for (var i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }


//concat > spread with many iteratables. 
//spread > concat single interatble
//https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat

// function flatten(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//           newArr = newArr.concat(flatten(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//     return newArr
// }

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
const arr2 = [1, [2, [3, 4], [[5]]]]
const arr3 = [[1],[2],[3]]
const flattened = [...flatten(arr, Infinity)];
const flattened2 = [...flatten(arr2, Infinity)];
const flattened3 = [...flatten(arr3, Infinity)];
console.log(flattened);
console.log(flattened2);
console.log(flattened3);
console.log([1, 2, 3, [4, 5]].flat(2)); // [1, 2, 3, 4, 5]



// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
