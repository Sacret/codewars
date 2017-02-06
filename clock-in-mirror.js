/**
  * Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22
  * He knows that the time is 11:38
  * In the same manner:
  *
  * 05:25 --> 06:35
  *
  * 01:50 --> 10:10
  *
  * 11:58 --> 12:02
  *
  * 12:01 --> 11:59
  *
  * Please complete the method which is provided with mirror time as string, and return the real time as string.
**/

function WhatIsTheTime(timeInMirror) {
  const [mirrorHours, mirrorMinutes] = timeInMirror.split(':');
  const realMinutes = (60 - mirrorMinutes) % 60;
  const realHours = (mirrorHours > 10 ? (24 - mirrorHours) : (12 - mirrorHours)) - (realMinutes > 0);
  const hours = ('0' + realHours).slice(-2);
  const minutes = ('0' + realMinutes).slice(-2);
  return `${hours}:${minutes}`;
}
