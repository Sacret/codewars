/**
  * Write a program that finds the summation of every number between 1 and num.
  * The number will always be a positive integer greater than 0.
**/

const summation = num => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
