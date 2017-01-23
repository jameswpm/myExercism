var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function() {
  if (this.year % 400 == 0) {
    return true;
  }
  if (this.year % 100 == 0) {
    return false;
  }
  return this.year % 4 == 0;
}

module.exports = Year;
