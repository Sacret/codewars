/**
 * Encrypt this!
 *
 * You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
 * 
 * Your message is a string containing space separated words.
 * You need to encrypt each word in the message using the following rules:
 * The first letter needs to be converted to its ASCII code.
 * The second letter needs to be switched with the last letter
 * Keepin' it simple: There are no special characters in input.
 * Examples:
 * encryptThis("Hello") === "72olle"
 * encryptThis("good") === "103doo"
 * encryptThis("hello world") === "104olle 119drlo"
 */

const encryptThis = text => text
  .split(' ')
  .map(word => {
    const letters = word.split('');
    if (letters.length > 2) {
      const lastIndex = letters.length - 1;
      const lastLetter = letters[lastIndex];
      letters[lastIndex] = letters[1];
      letters[1] = lastLetter;
    }
    if (letters.length) {
      letters[0] = word.charCodeAt(0);
      return letters.join('');
    }
    return word;
  })
  .join(' ');
