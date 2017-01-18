/**
  * You have a sequence of positive numbers starting with 1, but one number is missing!
  *
  * Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.
  *
  * In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.
  *
  * Note that the input may be with random order.
**/

function findMissingNumber(sequence) {
  if (!sequence.length) return 0;
  const numbers = sequence.split(' ');
  if (/\D/ig.test(numbers.join(''))) return 1;
  let missingNumber, numbersCount = 0;
  for (let i = 1; i <= numbers.length; i++) {
    if (~numbers.indexOf(i + '')) {
      numbersCount++;
      continue;
    }
    if (!missingNumber) missingNumber = i + '';
  }
  if (numbersCount < numbers.length - 1) return 1;
  if (!missingNumber) return 0;
  return +missingNumber;
}