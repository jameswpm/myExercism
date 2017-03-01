var BigInt = require('./big-integer');
var Grains = function(){}

Grains.prototype.square = function(squareNumber) {
  var total = BigInt(0);
  if (typeof squareNumber != 'object') {
    squareNumber = BigInt(squareNumber);
  }

  if (squareNumber == 1) {
    total = total.add(1);
  } else {
    var partial = BigInt(this.square(squareNumber.minus(1)));
    total = total.add(partial.multiply(2));
  }

  return total.toString();
}

Grains.prototype.total = function() {
  var total = BigInt(0);
  for (var i = 64; i > 0; i--) {
    var square = BigInt(this.square(i));
    total = total.add(square);
  }

  return total.toString();
}

module.exports = Grains
