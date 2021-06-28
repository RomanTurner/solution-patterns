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

  

  console.log(aMap, bMap);
}

sameFrequency(234234, 2342453);
toStringArray(345);
