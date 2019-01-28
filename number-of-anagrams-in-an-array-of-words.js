/**
 * An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".
 *
 * Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".
 * 
 * Some examples:
 * 
 * There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
 * There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
 */

const anagramCounter = wordsArray => {
  const sortedWords = {};
  let counter = 0;
  wordsArray.forEach(word => {
    const sortedWord = word.split('').sort().join('');
    if (!sortedWords[sortedWord]) {
      sortedWords[sortedWord] = 0;
    }
    sortedWords[sortedWord]++;
    if (sortedWords[sortedWord] > 1) {
      counter += sortedWords[sortedWord] - 1;
    }
  });

  return counter;
}
