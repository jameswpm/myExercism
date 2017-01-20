var Isogram = function(input) {
  this.word = input.toLowerCase().replace(/[- ]/g,"");
}

Isogram.prototype.isIsogram = function() {
    var isogramRet = true;
    var objTest = {};
    for (var i = 0; i < this.word.length; i++) {
        if (objTest[this.word.charAt(i)] === undefined) {
          objTest[this.word.charAt(i)] = true;
        } else {
          isogramRet = false;
          break;
        }
    }

    return isogramRet;
}

module.exports = Isogram;
