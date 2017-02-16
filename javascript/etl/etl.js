var ETL = function () {}

ETL.prototype.transform = function(old) {
  //iterate over old object and incude each number in array in the new object
  var current = {};

  for (key in old) {
    old[key].forEach(function(arrVal) {
      var letter = arrVal.toLowerCase();
      var number = Number(key);
      current[letter] = number;
    });
  }

  return current;
}

module.exports = ETL;
