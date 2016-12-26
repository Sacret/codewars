/**
  * Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
  * Negative numbers and duplicate numbers can and will appear.
  *
  * NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
**/

const sum_pairs = (ints, s) => {
  const intsSet = new Set();
  for (let i = 0; i < ints.length; i++) {
    let currInt = ints[i];
    if (intsSet.has(s - currInt)) return [s - currInt, currInt];
    else intsSet.add(currInt);
  }
}
