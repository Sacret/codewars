/**
  * Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
  *
  * A few cases:

  * (-12, 2, -6)  ->  true
  * (-12, 2, -5)  ->  false
**/

const isDivideBy = (number, a, b) => !(number % a) && ! (number % b);