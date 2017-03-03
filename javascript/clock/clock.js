var at = function (hour, minutes) {
  this.hour = typeof(hour) != 'undefined' ? hour : 0;
  this.minutes = typeof(minutes) != 'undefined' ? minutes : 0;

  
  var hourS = this.hour.toString();
  var minutesS = this.minutes.toString();
  var hour = pad.substring(0, pad.length - hourS.length) + hourS;
  var minute = pad.substring(0, pad.length - minutesS.length) + minutesS;
  return (hour + ":" + minute);


}
module.exports = { 'at': at };
