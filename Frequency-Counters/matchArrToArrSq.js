const x = [1, 2, 3, 4, 5];
const w = [1, 4, 9, 16, 25];
const y = [1, 2, 3, 4, 4];
const p = [1, 4, 9, 16, 16];

function matchArrToArrSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const fc = arr1.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  const fcs = arr2.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  for (let [key, val] of fc) {
    testVal = fcs.get(key ** 2);
       // in cases of an undefined value, make sure the key
       // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !fcs.has(key ** 2))) {
      return false;
    }
}
     return true;
}
//squared first
console.log(frequencyMapper(x, w));
console.log(frequencyMapper(y, p));
