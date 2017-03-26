/**
  * Write a function isIntArray with the below signature.
  *
  * function isIntArray(arr) {
  *     return true;
  * }
  * returns true if every element in an array is an integer.
  * returns true if array is empty.
  * returns false for every other input.
  *
**/

function isIntArray(arr) {
  arr.forEach(elem => {
    if (isNan(+elem) || isNan(parseInt(elem)) || parseInt(elem) !== +elem) {
      return false;
    }
  });
  return true;
}
