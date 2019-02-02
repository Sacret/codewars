/**
 * Hello and welcome to your new job as a astronomer at Ohio radio telescope!
 *
 * Straight to the task, here, you will have to look for dubious extraterrestrial signal from outer space.
 * 
 * We use following system in our telescope: All signals are transformed into sequences of whitespaces, numbers and letters that display strength of the signal:
 * 
 * " " - no signal was recieved at the moment;
 * "1 to 9" - weak signal;
 * "A to Z" - strong signal;
 * Your job is to find all WOW-signals in given sequences. WOW-signal is a pretty strong due to his alien origin and consists only(!) of digits above 6 or letters. For example "ABB87ED" is an WOW-signal, while "DEF67" isn't because of "6".
 * 
 * Be careful! Signals that are stronger than "F" are impossible and should be treated like attempts to jam receiver.
 *
 * Also short (below 6 symbols) and frequent (above 3 times) WOW-signals also considered to be suspicious attempts to spoil our work. At the same moment, 3 or less of short signals are ok.
 * 
 * "1 34 AB CD EF 45 5 B99ACF"  ==> WOW-signal found!
 * Despite the fact that AB, CD and EF are shorter than 6 symbols, there are only 3 of them in the sequence. So, it is a valid WOW-signal.
 * 
 * Your task is to write a function to decode a string of characters into a string consisting only from WOW-signals separated by whitespaces. Function should return "blocked jam attempt" to all suspicious inputs and return "no signals found" if it couldn't find any WOWs.
 *
 * Work example:
 * 
 * " 1  1 223 A99BC788D  1 23 6654  BAC "  ==> "A99BC788D BAC"
 * "   445  295 7F  11  23 6654  1 A    "  ==> "7F A"
 * "   ALL YOUR BASE ARE BELONG TO US   "  ==> "blocked jam attempt"
 * " 1 2 34 4 22 ABCDD 32 98BCC AF 65 F "  ==> "blocked jam attempt"
 * "11 1 1  3 1 3   52  2  2 3  1   2 3 "  ==> "no signals found"
 */

const WOWdecoder = seq => {
  const strs = seq.split(/\s+/g);
  const wowSignals = [];
  let suspiciousAttempts = 0;
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    if (!str || !str.length) continue;
    if (/[G-Z]+/.test(str)) {
      return 'blocked jam attempt';
    }
    if (/^[A-Z7-9]+$/.test(str)) {
      wowSignals.push(str);
      if (str.length < 6) {
        suspiciousAttempts++;
      }
      if (suspiciousAttempts > 3) {
        return 'blocked jam attempt';
      }
    }
  }
  if (wowSignals.length) {
    return wowSignals.join(' ');
  }
  return 'no signals found';
}
