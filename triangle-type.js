/**
 * In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).
 *
 * If all angles are less than 90°, this triangle is acute and function should return 1.
 * 
 * If one angle is strictly 90°, this triangle is right and function should return 2.
 * 
 * If one angle more than 90°, this triangle is obtuse and function should return 3.
 * 
 * If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.
 * 
 * Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).
 *
 * If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.
 */

 /* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
const triangleType = (a, b, c) => {
  const arr = [a, b, c].sort((a, b) => a - b);
  if (arr[0] + arr[1] <= arr[2]) {
    return 0;
  }
  const sumPowMin = Math.pow(arr[0], 2) + Math.pow(arr[1], 2);
  const sumPowMax = Math.pow(arr[2], 2)
  if (sumPowMin === sumPowMax) {
    return 2;
  } else if (sumPowMin > sumPowMax) {
    return 1;
  } else {
    return 3;
  }
}