/**
  * You are given an array strarr of strings and an integer k.
  * Your task is to return the first longest string consisting of k consecutive strings taken in the array.
  *
  * Example:
  *
  * longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
  *
  * n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
**/

function longestConsec(strarr, k) {
  const n = strarr.length;
  if (!n || k > n || k <= 0) return '';

  let longestStr = '';
  for (let i = 0; i <= n - k; i++) {
    let currentLongestStr = '';
    for (let j = 0; j < k; j++) {
      currentLongestStr += strarr[i + j];
    }
    if (currentLongestStr.length > longestStr.length) {
      longestStr = currentLongestStr;
    }
  }

  return longestStr;
}
