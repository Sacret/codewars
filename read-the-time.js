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

const unitsNames = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decNames = ['zero', 'ten', 'twenty', 'half'];

const solve = time => {
  const [hourStr, minuteStr] = time.split(':');
  const hour = +hourStr;
  const minute = +minuteStr;

  const minuteDec = Math.floor(minute / 10);
  const minuteUnit = minute % 10;
  const minutesLeft = 60 - minute;
  const minuteLeftDec = Math.floor(minutesLeft / 10);
  const minuteLeftUnit = minutesLeft % 10;

  const minHour = hour % 12;
  const maxHour = minHour < 11 ? minHour + 1 : 0;
  let result = '';

  if (minute === 0) {
    result = hour === 0 ? `${unitsNames[minHour]}` : `${unitsNames[minHour]} o'clock`;
  } else if (minute < 15) {
    result = `${unitsNames[minuteUnit]} minutes past ${unitsNames[minHour]}`;
  } else if (minute === 15) {
    result = `${unitsNames[minuteUnit]} past ${unitsNames[minHour]}`;
  } else if (minute < 30) {
    result = `${decNames[minuteDec]} ${unitsNames[minuteUnit]} minutes past ${unitsNames[minHour]}`;
  } else if (minute === 30) {
    result = `${decNames[minuteDec]} past ${unitsNames[minHour]}`
  } else if (minute < 45) {
    result = `${decNames[minuteLeftUnit]} ${unitsNames[minuteLeftUnit]} minutes to ${unitsNames[maxHour]}`;
  } else if (minute === 45) {
    result = `${unitsNames[minuteLeftUnit]} to ${unitsNames[maxHour]}`;
  } else {
    result = `${unitsNames[minuteLeftUnit]} minutes to ${unitsNames[maxHour]}`;
  }
  return result;
}
