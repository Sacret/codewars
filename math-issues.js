/**
  * Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions?
  * We can assure, that only non-negative numbers are passed as arguments.
  * So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
**/

Math.round = number => {
  const base = number^0;
  const mod = number - base;
  return mod < 0.5 ? base : base + 1;
};

Math.ceil = number => {
  const base = number^0;
  const mod = number - base;
  return mod > 0 ? base + 1 : base;
};

Math.floor = number => {
  const base = number^0;
  return base;
};