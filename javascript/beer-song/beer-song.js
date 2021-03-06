var BeerSong = function () {}

BeerSong.prototype.verse = function (verseNumber) {
  if (verseNumber === 0) {
    return "No more bottles of beer on the wall, no more bottles of beer.\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  }
  if (verseNumber === 1) {
    return verseNumber + " bottle of beer on the wall, " + verseNumber + " bottle of beer.\n" + "Take it down and pass it around, no more bottles of beer on the wall.\n"
  }
  if (verseNumber === 2) {
    return verseNumber + " bottles of beer on the wall, " + verseNumber + " bottles of beer.\n" + "Take one down and pass it around, " + (verseNumber - 1) + " bottle of beer on the wall.\n"
  }

  return verseNumber + " bottles of beer on the wall, " + verseNumber + " bottles of beer.\n" + "Take one down and pass it around, " + (verseNumber - 1) + " bottles of beer on the wall.\n";
}

BeerSong.prototype.sing = function (firstVerse, secondVerse) {
  var text = "";
  // default arguments
  if (typeof(firstVerse) === 'undefined') {
    firstVerse = 99;
  }
  if (typeof(secondVerse) === 'undefined') {
    secondVerse = 0;
  }

  for (; firstVerse > secondVerse; firstVerse--) {
      text += this.verse(firstVerse) + "\n";
  }
  text += this.verse(firstVerse);

  return text;
}

module.exports = BeerSong;
