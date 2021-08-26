function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor((end - start) / 2 + start);
   switch (true) {
     case arr[mid] === target:
       return mid;
     case end - start === 0:
       return "not found";
     case arr[mid] < target:
       return binarySearch(arr, target, mid + 1, end);
     case arr[mid] > target:
       return binarySearch(arr, target, start, mid);
   }
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 5, 6, 7], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));