function factorial(num) {
  if (num === 0) return 1;
  return num === 1 ? 1 : num * factorial(num - 1);
}
console.log(factorial(6));



//concat > spread with many iteratables.
//spread > concat single interatble
//https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat
