var Gigasecond = function (inputDate) {
  this.internalDate = inputDate;
}

Gigasecond.prototype.date = function() {
    var returnDate = new Date(this.internalDate.getTime() + (1000000000 * 1000));
    return returnDate;
}

module.exports = Gigasecond;
