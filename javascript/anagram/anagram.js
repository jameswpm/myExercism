var Anagram = function(subject) {
  this.subject = subject.toLowerCase().split('');//list of chars from original word
}

Anagram.prototype.matches = function (...args) {
  var list = [];
  if (typeof(args[0]) !== "object") {
    for (var arg of args) {
        list.push(arg);
    }
  } else {
    list = args[0];
  }
  var anagramsList = [];

  list.forEach(function(possibleAnagram, index) {
    let subjectCopy = this.subject.slice();
    let possibleAnagramToCheck = possibleAnagram.toLowerCase();
    if (subjectCopy.length === possibleAnagramToCheck.length && subjectCopy.join('') != possibleAnagramToCheck) {
      for (var i = 0; i < possibleAnagramToCheck.length; i++) {
        let index = subjectCopy.indexOf(possibleAnagramToCheck.charAt(i));
        if (index > -1) {
          subjectCopy.splice(index,1);
        }
      }
      //anagramsList.push(subjectCopy.length);
      if (subjectCopy.length <= 0) {
        anagramsList.push(possibleAnagram);
      }
    }
  }.bind(this));

  return anagramsList;
}

module.exports = Anagram;
