let x = [1, 10, 50, 107];
let y = [7, 8, 23, 37, 99];
let w = [...x, ...y];

// naive approach
/* 
Create empty array, take a look at the smalles values in each input array
While there are still values we havent looked at
    - If the value in the first array is smaller than the value in the second
    array, push the value in the first array into our results array and move to the 
    next value
    - If the value in the first array is larger than put the value from the second 
    array in the results array. 
    - If one value reaches the end, push the rest of the remaining array into the results. 
*/

function merge(arr1, arr2) {
  let results = [];
  let i = 0,
      j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }

  i === arr1.length
    ? results.push(...arr2.slice(j))
    : results.push(...arr1.slice(i));
  return results;
}

console.log(merge(x, y));

/* 
 - Break array into halves, until array.length <= 1
 - Once you have single arrays, merge until the length is back to orignal length
 - Once the array has been merged back together, return the merged and sorted array. 
*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

console.log(mergeSort(w));
