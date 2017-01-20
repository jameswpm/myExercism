var Pangram = function(input) {
  this.phrase = input.toLowerCase().trim();
}

Pangram.prototype.isPangram = function() {
    if (this.phrase ===  "") {
      return false;
    }

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (var i = 0; i < this.phrase.length; i++) {
      let index = alphabet.indexOf(this.phrase.charAt(i));
      if (index > -1) {
        alphabet.splice(index,1);
      }
    }

    if (alphabet.length > 0) {
      return false;
    }
    return true;
}

module.exports = Pangram;
