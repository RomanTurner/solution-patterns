//accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(num) {
  return num === 0 ? num : num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
