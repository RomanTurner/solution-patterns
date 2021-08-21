x = "descognail";

const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

function concatSwaps(s, sizes) {
  let codeArr = [];
  let beginIndex = 0;
  for (let i = 0; i < sizes.length; i++) {
    codeArr.push(s.slice(beginIndex, sizes[i] + beginIndex));
    beginIndex = beginIndex + sizes[i];
  }
  let n = codeArr.length;
  if (n % 2 != 0) n -= 1;
  for (let i = 0; i < n; i += 2) {
    swap(codeArr, i + 1, i);
  }
  let decodedString = codeArr.join("");
  return decodedString;
}

console.log(concatSwaps(x, [3, 2, 3, 1, 1]));


/* 
You are given an array of integers memory consisting of 0s and 1s - whether the corresponding memory unit is free or not. memory[i] = 0 means that the ith memory unit is free, and memory[i] = 1 means it's occupied.

Your task is to perform two types of queries:

alloc X: Find the left-most memory block of X consecutive free memory units and mark these units as occupied (ie: find the left-most contiguous subarray of 0s, and replace them all with 1s).
If there are no blocks with X consecutive free units, return -1; otherwise return the index of the first position of the allocated block segment and assign an ID to the range, based on an atomic counter (the counter starts at 1 and is incremented on every successful alloc operation).
erase ID: If there exists an allocated memory block with id of the range equal to ID, free all its memory units.
Return the length of the deleted memory block. If there is no such ID or the block with this ID has already been deleted, return -1.
The queries are given in the following format:

queries is an array of 2-elements arrays;
if queries[i][0] = 0 then this is an alloc type query, where X = queries[i][1];
if queries[i][0] = 1 then this is an erase type query, where ID = queries[i][1].
Return an array containing the results of all the queries.
*/


/* 
Given two integers maxRequests and window, and an array of integers requestTimestamps, your task is to implement a simple rate limiter: for every request during the last window seconds, if the number of prior requests has already reached the maxRequests limit, fail the request, otherwise - accept it. As a result, return a boolean array - whether each request from requestTimestamps has been accepted or not.

All timestamps in the requestTimestamps array are given in seconds, and the array is sorted in ascending order.

Example

For maxRequests = 3, window = 5, and requestTimestamps = [1, 1, 1, 2, 12, 32, 33, 34, 36], the output should be simpleRateLimiter(maxRequests, window, requestTimestamps) = [true, true, true, false, true, true, true, true, false].


*/