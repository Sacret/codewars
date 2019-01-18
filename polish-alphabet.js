/**
  * There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
  *
  * Your task is to change the letters with diacritics:
  *
  * ą -> a,
  * ć -> c,
  * ę -> e,
  * ł -> l,
  * ń -> n,
  * ó -> o,
  * ś -> s,
  * ź -> z,
  * ż -> z
  * and print out the string without the use of the Polish letters.
**/

const POLISH_LETTERS = {
  'ą' : 'a',
  'ć' : 'c',
  'ę' : 'e',
  'ł' : 'l',
  'ń' : 'n',
  'ó' : 'o',
  'ś' : 's',
  'ź' : 'z',
  'ż' : 'z',
};

function correctPolishLetters (string) {
  const letters = string.split('');
  return letters.reduce((prev, current) => prev + (POLISH_LETTERS[current] || current), '');
}
