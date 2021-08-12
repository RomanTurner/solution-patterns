/* 
Radix sort takes advantage of the property of numbers, where if they have 
more digits they will be larger.

We create 10 containers, 0-9 and based on the last digit based on iteration,
we place the number in those containers that coorellate to the last digit. 
*/

//* Helper Functions

//todo ******* getDigit */
//returns the digit in *num at the given *place
function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}
console.log(getDigit(1234, 2));
//******** */

//todo ******* digitCount */
//returns the number of digits in num
function digitCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(digitCount(1234));
//******** */

//todo ******* mostDigits */
//returns the largest amount of digits in a number given

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
console.log(mostDigits([1234, 7, 8, 9]));
//******** */

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitContainer = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
          let index = getDigit(nums[i], k);
          digitContainer[index].push(nums[i])
      }
      nums = [].concat(...digitContainer);
  }
    return nums;
}

const x = [120, 233, 34342, 223, 13430, 1329, 127, 3];
console.log(radixSort(x))
