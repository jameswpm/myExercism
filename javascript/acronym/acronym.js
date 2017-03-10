var Acronyms = function() {}

Acronyms.prototype.parse = function (original) {
  var originalArray = original.split(" ");
  var acronym = "";

  originalArray.forEach(function(word) {
    acronym += word[0];
  })

  return acronym;
}

module.exports = Acronyms;
