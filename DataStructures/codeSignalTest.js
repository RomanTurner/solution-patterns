// function centuryFromYear(year) {
//     return Math.ceil(year / 100);
// }

// let x = 2001
// let s = 1
// let w = 100
// let y = 1750

// console.log(centuryFromYear(x));
// console.log(centuryFromYear(s));
// console.log(centuryFromYear(w));
// console.log(centuryFromYear(y));

// function mutateTheArray(n, a) {
//     const b = Array.from({ length: n });
//   for (let i = 0; i < n; i++) {
//     let before = a[i - 1],
//       current = a[i],
//       after = a[i + 1];
//     if (!before) before = 0;
//     if (!current) current = 0;
//     if (!after) after = 0;
//     b[i] = before + current + after;
//   }
//   return b;
// }

// let a = [4, 0, 1, -2, 3];
// console.log(mutateTheArray(5, a));

// function removeOneDigit(s, t) {
// let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     let x = s.slice(i, i + 1);
//     let w = s.replace(x, "");
//       if (w < t) count++;
//   }
//     return count;
// }

// let t = "ab24z";
// let s = "ab12c";

// console.log(removeOneDigit(s, t));

// Given an array of non - negative integers arr,
// your task is to find the number of ways it
// can be split into three non - empty contiguous
// subarrays such that the sum of the elements in
// the first subarray is less than or equal
// to the sum of the elements in the second subarray,
// and the sum of the elements in the second subarray
// is less than or equal to the sum of the elements in the third subarray.

function findCount(arr, n) {
  // Stores the prefix sums
  let prefix_sum = Array.from({ length: n }, (_, i) => 0);

  prefix_sum[0] = arr[0];

  for (let i = 1; i < n; i++) prefix_sum[i] = prefix_sum[i - 1] + arr[i];

  // Stores the suffix sums
  let suffix_sum = Array.from({ length: n }, (_, i) => 0);

  suffix_sum[n - 1] = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) suffix_sum[i] = suffix_sum[i + 1] + arr[i];

  let s = 1,
    e = 1;
  let curr_subarray_sum = 0,
    count = 0;

  // Traverse the given array
  while (s < n - 1 && e < n - 1) {
    // Updating curr_subarray_sum until
    // it is less than prefix_sum[s-1]
    while (e < n - 1 && curr_subarray_sum < prefix_sum[s - 1]) {
      curr_subarray_sum += arr[e++];
    }

    if (curr_subarray_sum <= suffix_sum[e]) {
      // Increase count
      count++;
    }

    // Decrease curr_subarray_sum by arr[s[]
    curr_subarray_sum -= arr[s++];
  }

  // Return count
  return count;
}

 let arr = [1, 2, 3];
 let n = arr.length;

console.log(findCount(arr, n));