/* 
 - Exploits that array of 0 or 1 element are always sorted
 - Works by selecting one element called the 'pivot'
   it moves all the numbers around it to either less than or greater than. 
   Thus it is in its sorted spot. 


- Write a function called pivot, it will accept three arguments. 
An array, a start index, and an end index (can default to 0, and arr.length -1)
    - Grab the pivot from the start of the array
    - Store the current pivot index in a variable. This will keep track of where the 
    pivot should end up. 
    -If the pivot element is greater than the current element, increment the pivot index
    and then swap the current element with the element at the pivot index
    -Swap the starting element (aka the pivot) witht the pivot index
    -Return pivot index
*/
let x = [4, 8, 2, 1, 5, 7, 6, 3];
let y = [7, 23, 15, 37, 4];
let w = [...x, ...y];

function swap(arr, indx1, indx2) {
  [arr[indx2], arr[indx1]] = [arr[indx1], arr[indx2]];
  return arr;
}

function pivotFinder(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
      console.log(arr);
    }
  }
  swap(arr, start, swapIndx);
  return swapIndx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotFinder(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}
// [4, 8, 2, 1, 5, 7, 6, 3]

const mid = Math.floor(x.length / 2);
console.log(quickSort(x));

