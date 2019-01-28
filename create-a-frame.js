/**
 *
  *************************
  *  Create a frame!      *
  *           __     __   *
  *          /  \~~~/  \  *
  *    ,----(     ..    ) *
  *   /      \__     __/  *
  *  /|         (\  |(    *
  * ^  \  /___\  /\ |     *
  *    |__|   |__|-..     *
  *************************
 * Given an array of strings and a character to be used as border, output the frame with the content inside.
 *
 * Example:
 * 
 * frame(['Create','a','frame'], '+')
 * 
 * Output:
 *
 * ++++++++++
 * + Create +
 * + a      +
 * + frame  +
 * ++++++++++
 * Important notes:
 * 
 * Always keep a space between the input string and the left and right borders.
 * The input array is never empty.
 * All strings will be at least 20 characters long.
 * The biggest string inside the array should always fit in the frame.
 */

const frame = (text, char) => {
  let result = '';
  const maxWord = [...text].sort((a, b) => a.length < b.length)[0];
  const maxLength = maxWord.length;

  result += `${Array(maxLength + 5).join(char)}\n`;
  text.forEach(word => {
    result += `${char} ${word}${Array(maxLength - word.length + 1).join(' ')} ${char}\n`;
  });
  result += Array(maxLength + 5).join(char);
  return result;
};