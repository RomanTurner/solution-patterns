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

let x = [1, 10, 50, 107];
let y = [7, 8, 23, 37, 99];
let w = [...x, ...y];

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr
}


function pivot(arr, start=0, end=arr.length-1) {
    let pivotIndex = start;
    for (let i = 1; i < end; i++){
        if (arr[i] < arr[pivotIndex]) {
            swap(arr, arr[i], arr[pivotIndex])
        } 
    }
}

console.log(swap(x, 0, 1));