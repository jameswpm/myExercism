//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  //clean input
  input = input.split(" ").join("").trim();
  input = input.split(",").join("");

  var response = "Whatever.";

  if (input.length == 0) {
    response = "Fine. Be that way!";
  }

  //check for question mark in the end of input to identify a question
  //check it first to deal with yelling questions (test case 6)
  if (input.charAt(input.length -1) == "?") {
    response = "Sure.";
  }

  //check if all characters of the input are uppercase (yell)
  var yell = 0;//starts with zero upper characters
  var countNumbers = 0;
  for (var i = 0; i < input.length; i++) {
    if (!isNaN(input.charAt(i) * 1)) {
      countNumbers++;
      continue;
    }
    if (input.charAt(i) == input.charAt(i).toUpperCase()) {
      yell++;
    }
  }

  //check if all letters are uppercase ignoring numbers
  if (yell != 0 && yell != 1 && (yell == input.length - countNumbers)) {
    response = "Whoa, chill out!";
  }

  return response;
};

module.exports = Bob;
