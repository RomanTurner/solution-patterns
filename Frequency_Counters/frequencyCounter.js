var repeatedNTimes = function (arr) {
  // A.length === 2N
  // A.length / 2 + 1 unique elements
  // A.length / 2 times
  // Return Target === A.length / 2 times occurences in the Array A

  const map = arr.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  const target = arr.length / 2;
  const occurences = [...map.entries()];
  for (let i = 0; i < occurences.length; i++) {
    if (occurences[i][1] === target) {
      return occurences[i][0];
    }
  }
};


const x = [1, 2, 3, 3];
const w = [1, 2, 3, 3, 3, 2];
const y = [1, 2, 3, 2, 7, 2, 2, 2, 5, 6];
const p = [8, 4, 3, 4, 7, 4, 4, 4, 5, 2];

console.log(repeatedNTimes(p));
