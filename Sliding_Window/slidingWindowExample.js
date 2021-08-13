function maxWindowSum(arr, num) {
  let max = 0;
  let temp = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    // subract the beginning of the window as it leaves. Add the end of the window as it enters.
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}
