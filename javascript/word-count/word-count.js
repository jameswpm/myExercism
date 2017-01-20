var Words = function(input) {};

Words.prototype.count = function(phrase) {
  var wordCount = {};
  var cleanPhrase = phrase.split(",").join(" ").toLowerCase().trim();
  cleanPhrase = cleanPhrase.replace(/[¡!?¿&@$%^~:;.*]/g,"");
  cleanPhrase = cleanPhrase.replace(/\s+/g," ");
  var phraseArray = cleanPhrase.split(" ");

  for (var i = 0; i < phraseArray.length; i++) {
    let word = phraseArray[i].toString();
    if (word == "constructor") {
      wordCount[word] = 1;
    } else {
      if ((word.match(/\'/g)||[]).length > 1) {
        word = word.replace(/\'+/g,"");
      }
      if (wordCount[word] === undefined) {
        wordCount[word] = 1;
      } else {
        wordCount[word]++;
      }
    }
  }

  return wordCount;
}

module.exports = Words;
