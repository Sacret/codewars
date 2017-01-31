/**
  *Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
**/

const uniqueInOrder = iterable => {
  if (!iterable.join) {
    iterable = iterable.split('');
  }
  let result = [];
  if (iterable.length) result.push(iterable[0]);
  iterable.forEach((item, index) => {
    if (index && item !== iterable[index - 1]) {
      result.push(item);
    }
  });
  return result;
};
