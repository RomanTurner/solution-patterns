function nestedEvenSum(obj) {
    let result = 0;
    let arr = Object.keys(obj)
    console.log(obj, arr);
  for (let i = 0; i < arr.length; i++) {
    if (obj === Object(arr[i])) {
      nestedEvenSum(arr[i]);
    } else if (typeof arr[i] === Number){
      result += arr[i]
    }
  }
  return result;
}
  

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};
console.log(nestedEvenSum(obj1));
//console.log(nestedEvenSum(nestedEvenSum(obj2)));

