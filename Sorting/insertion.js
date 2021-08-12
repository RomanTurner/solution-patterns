/* 
Insertion Sort
This is something I need to finish
git add . 
git commit -m 'sp'
git push
*/
const x = [19, 44, 38, 5, 22, 7];
function insertionSort(arr, n) {
  let i, key, j;

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function insertionSortCS(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[i] = currentVal;
  }
  return arr;
}

const insertionSortImmutable = (array) => {
  const arr = Array.from(array); // avoid side effects
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
};

console.log(insertionSortImmutable(x));



// A utility function to print an array of size n
// function printArray(arr, n)
// {
//     let i;
//     for (i = 0; i < n; i++)
//         document.write(arr[i] + " ");
//     document.write("<br>");
// }

// Driver code
//     let arr = [12, 11, 13, 5, 6 ];
//     let n = arr.length;

//     insertionSort(arr, n);
// printArray(arr, n);

const n = x.length;

console.log(insertionSort(x, n));
console.log(insertionSortCS(x));
