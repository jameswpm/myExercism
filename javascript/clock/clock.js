var at = function (hour, minutes) {
  this.hour = typeof(hour) != 'undefined' ? hour : 0;
  this.minutes = typeof(minutes) != 'undefined' ? minutes : 0;

  if (this.minutes >= 60) {
    this.hour += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
  }

  if (this.hour < 0) {
    let calc = Math.abs(this.hour) % 24;
    let temp = 24;
    this.hour = temp - calc;
  }

  /*if (this.minutes < 0) {
    let calc = Math.abs(this.minutes) % 60;
    let temp = 60;
    this.minutes = temp - calc;
  }*/

  if (this.hour == 24) {
    this.hour = 0;
  }

  if (this.hour > 24) {
    this.hour = this.hour % 24;
  }

	if (this.hour < 10) {
		this.hour = "0" + this.hour;
  }
	if (this.minutes > 0 && this.minutes < 10) {
    this.minutes = "0" + this.minutes;
  }

  var min = this.minutes || "00";

  return this.hour + ":" + min;
}

String.prototype.equals = function (clock) {
	var time = this.split(':');
	var hours = +(time[0]);
	var min = +(time[1]);
	var otherTime = clock.split(':');
	var otherHours = +(otherTime[0]);
	var otherMin = +(otherTime[1]);
	return hours === otherHours && min === otherMin;
}

module.exports = { 'at': at };
