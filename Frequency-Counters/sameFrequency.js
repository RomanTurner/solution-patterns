/* Same Frequency 
Write a function called sameFrequency. Given two positive integers, find out tif the two numbers 
have the same frequency of digits. 
*/

function toStringArray(num) {
  const numArray = num.toString().split("");
  return numArray;
}

function frequencyMap(arr) {
  const map = arr.reduce(
    (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
    new Map()
  );
  return map;
}

const pipe =
  (...functions) =>
  (value) =>
    functions.reduce(
      (currentValue, currentFunction) => currentFunction(currentValue),
      value
    );

function sameFrequency(a, b) {
  const aMap = pipe(toStringArray, frequencyMap)(a);
  const bMap = pipe(toStringArray, frequencyMap)(b);

  if (aMap.size !== bMap.size) {
    return false;
  }

  for (let [key, val] of aMap) {
    const testVal = bMap.get(key);
    // in cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !bMap.has(key))) {
      return false;
    }
  }
  return true
}



