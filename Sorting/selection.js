/* 
Selection Sort
Swaps the minimum with the first pointer. 
*/

const x = [19, 44, 38, 5, 22, 7];
function swap(arr, idx1, idx2) {
   [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}
/* 
- Store the first element as the smallest value you've seen so far. 
- Compare this item to the next item in the array until you find a small value. 
- If a smaller number is found, desigante that smaller number to be the new
minimum and continue until the end of the array. 
- If the minimum is not the value(index) you initially began with, swap. 
- Repeat this with the next element until the array is sorted. 
*/
function selectionNaive(arr) {
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j; 
            }
        }
         if (i !== min) swap(arr, i, min);
    }
    
    return arr;
}

console.log(selectionNaive(x));

