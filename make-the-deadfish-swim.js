/**
 * Write a simple parser that will parse and run Deadfish.
 *
 * Deadfish has 4 commands, each 1 character long:
 * 
 * i increments the value (initially 0)
 * d decrements the value
 * s squares the value
 * o outputs the value into the return array
 * Invalid characters should be ignored.
 * 
 * parse("iiisdoso") => [ 8, 64 ]
 */

// Return the output array, and ignore all non-op characters
const parse = data => {
  const items = data.split('');
  let value = 0;
  return items.reduce((res, item) => {
    switch (item) {
      case 'i':
        value += 1;
        break;
      case 'd':
        value -= 1;
        break;
      case 's':
        value *= value;
        break;
      case 'o':
        res.push(value);
        break;
    }
    return res;
  }, []);
};
