/**
 * In this kata you'll be given a value expressed in milliseconds. Your job is to convert this value to a nicely readable format like this "hh:mm:ss".
 *
 * Some basic rules:
 * Your answer should be returned as a string
 * Don't use any leading zeros before your string, e.g.
 *
 * "1:00:00" // is correct;
 * "1:00" // is correct;
 * "01:00" // is not correct;
 *
 * Always show the number of minutes and seconds, but don't show the hours if less than one hour
 *
 * "0:59:00" // is not correct;
 * "59:00" // is correct;
 * Always round down to the nearest whole second
 * If the value is less than 1 hour, don't show the hours at all
 * The highest possible value will be 86,400,000 milliseconds, i.e. 24 hours
 */

const MS_IN_H = 3600000;
const MS_IN_M = 60000;
const MS_IN_S = 1000;

const toString = (time) => {
  const hours = Math.floor(time / MS_IN_H);
  const minutes = Math.floor((time - hours * MS_IN_H) / MS_IN_M);
  const seconds = Math.floor((time - hours * MS_IN_H - minutes * MS_IN_M) / MS_IN_S);
  return `${hours ? `${hours}:` : ''}${hours && minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
}
