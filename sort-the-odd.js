/**
  * You have an array of numbers.
  * Your task is to sort ascending odd numbers but even numbers must be on their places.
  *
  * Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
**/

const isOdd = num => num && num % 2;

function sortArray(array) {
  const oddNumbers = array
    .filter(num => isOdd(num))
    .sort((numA, numB) => numA - numB);
  return array.map(item => isOdd(item) ? oddNumbers.shift() : item);
}
