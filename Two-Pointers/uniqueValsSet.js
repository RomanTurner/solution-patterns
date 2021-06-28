function countUnique(iterable) {
  return new Set(iterable).size;
}
console.log(countUnique([1, 2, 2, 5, 7, 7, 99]));