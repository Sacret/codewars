/**
  * Given time in 24-hour format, convert it to words.
  * For example:
  * 13:00 = one o'clock
  * 13:09 = nine minutes past one
  * 13:15 = quarter past one
  * 13:29 = twenty nine minutes past one
  * 13:30 = half past one
  * 13:31 = twenty nine minutes to two
  * 13:45 = quarter to two
  * 00:48 = twelve minutes to one
  * 00:08 = eight minutes past midnight
  * 12:00 = twelve o'clock
  * 00:00 = midnight
  *
  * Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'.
*/

const unitsNames = [
  'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half',
];

const solve = time => {
  const [hourStr, minuteStr] = time.split(':');
  const hour = +hourStr;
  const minute = +minuteStr;

  const minuteUnit = minute < 30 ? minute : 60 - minute;

  const minHour = hour === 12 ? 12 : hour % 12;
  const maxHour = hour === 23 ? 0 : minHour + 1;
  let result = '';

  const minuteText = `minute${minuteUnit > 1 ? 's' : ''}`;

  if (minute === 0) {
    result = hour === 0 ? `midnight` : `${unitsNames[minHour]} o'clock`;
  } else if (minute < 15) {
    result = `${unitsNames[minuteUnit]} ${minuteText} past ${unitsNames[minHour]}`;
  } else if (minute === 15) {
    result = `${unitsNames[minuteUnit]} past ${unitsNames[minHour]}`;
  } else if (minute < 30) {
    result = `${unitsNames[minuteUnit]} ${minuteText} past ${unitsNames[minHour]}`;
  } else if (minute === 30) {
    result = `${unitsNames[minuteUnit]} past ${unitsNames[minHour]}`
  } else if (minute < 45) {
    result = `${unitsNames[minuteUnit]} ${minuteText} to ${unitsNames[maxHour]}`;
  } else if (minute === 45) {
    result = `${unitsNames[minuteUnit]} to ${unitsNames[maxHour]}`;
  } else {
    result = `${unitsNames[minuteUnit]} ${minuteText} to ${unitsNames[maxHour]}`;
  }
  return result;
}
