

// const bubbleSort = (arr) => {
//     arr.forEach((el, index) => {
//         for (let i = 0; i < arr.length; i++){
//             let first = arr[i];
//             let second = arr[i+1]
//             if (first > second) {
//                 swap(arr)
//             }
//         }
//     })
// }

/* 

Naive

function naiveBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            console.log(arr, arr[j] , arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
            }
        }
    }
    return arr;
}

let x = [23, 8, 56, 1, 13]
console.log(naiveBubbleSort(x));

*/


const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function naiveBubbleSort(arr) {
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i-1; j++){
            console.log(arr, arr[j] , arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
               swap(arr, j, j+1)
            }
        }
    }
    return arr;
}



let x = [23, 8, 56, 1, 13]
console.log(naiveBubbleSort(x));

function refactoredBubbleSort(arr) {
    let noSwaps;

    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for (let j = 0; j < i - 1; j++){
             console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;  
}

console.log(refactoredBubbleSort(x));