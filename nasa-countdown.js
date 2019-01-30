/**
 * You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.
 *
 * If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).
 * 
 * countdown(-154800000)  // return  '-43:00:00'
 * countdown(0)           // return  '+00:00:00'
 * countdown(61000)       // return  '+00:01:01'
 * countdown(360000000)   // return '+100:00:00'
 */

const countdown = ms => {
  const absMs = Math.abs(ms);
  const hour = Math.floor(absMs / 3600000);
  const min = Math.floor((absMs - hour * 3600000) / 60000);
  const sec = Math.floor((absMs - hour * 3600000 - min * 60000) / 1000)
  return `${ms < 0 ? '-' : '+'}${Math.abs(hour) < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}
