var FoodChain = function() {}

FoodChain.prototype.I_KNOW = "I know an old lady who swallowed a ";
FoodChain.prototype.FINAL = "I don't know why she swallowed the fly. Perhaps she'll die.";
FoodChain.prototype.SWALLOWED = "She swallowed the ";
FoodChain.prototype.CATCH = " to catch the ";
FoodChain.prototype.VERSES_LIST = {1: {"animal" : "fly", "exclamation" : ""},
                                   2: {"animal" : "spider", "exclamation" : "wriggled and jiggled and tickled inside her"},
                                   3: {"animal" : "bird", "exclamation" : "How absurd to swallow a bird!"},
                                   4: {"animal" : "cat", "exclamation" : "Imagine that, to swallow a cat!"},
                                   5: {"animal" : "dog", "exclamation" : "What a hog, to swallow a dog!"},
                                   6: {"animal" : "goat", "exclamation" : "Just opened her throat and swallowed a goat!"},
                                   7: {"animal" : "cow", "exclamation" : "I don't know how she swallowed a cow!"},
                                   8: {"animal" : "horse", "exclamation" : "She's dead, of course!"}
                                 };
FoodChain.prototype.recursiveVerse = function (num) {
  retVerse = "";
  if (num === 2) {
    retVerse += this.SWALLOWED + this.VERSES_LIST[num+1]["animal"] + this.CATCH + this.VERSES_LIST[num]["animal"] + " that " + this.VERSES_LIST[num]["exclamation"] + ".\n";
    retVerse += this.SWALLOWED + this.VERSES_LIST[num]["animal"] + this.CATCH + this.VERSES_LIST[num-1]["animal"] + ".\n";
  } else {
    retVerse += this.SWALLOWED + this.VERSES_LIST[num+1]["animal"] + this.CATCH + this.VERSES_LIST[num]["animal"] + ".\n";
    retVerse += this.recursiveVerse(num-1);
  }
  return retVerse;
}

FoodChain.prototype.verse = function(verseNum) {
  var verse = "";
  if (verseNum === 1) {
    verse += this.I_KNOW + this.VERSES_LIST[verseNum]["animal"] + ".\n";
  } else if (verseNum === 2) {
    verse += this.I_KNOW + this.VERSES_LIST[verseNum]["animal"] + ".\n";
    verse += "It " + this.VERSES_LIST[verseNum]["exclamation"] + ".\n";
    verse += this.SWALLOWED + this.VERSES_LIST[verseNum]["animal"] + this.CATCH + this.VERSES_LIST[verseNum-1]["animal"] + ".\n";
  } else if (verseNum == 8){
    verse += this.I_KNOW + this.VERSES_LIST[verseNum]["animal"] + ".\n";
    verse += this.VERSES_LIST[verseNum]["exclamation"] + "\n";
    return verse;
  } else {
    verse += this.I_KNOW + this.VERSES_LIST[verseNum]["animal"] + ".\n";
    verse += this.VERSES_LIST[verseNum]["exclamation"] + "\n";
    verse += this.recursiveVerse(verseNum - 1);
  }
  return verse + this.FINAL + "\n";
}

FoodChain.prototype.verses = function(start, end) {
  var song = "";
  for (; start <= end; start++) {
    song += this.verse(start) + "\n";
  }
  return song;
}

module.exports = FoodChain;
