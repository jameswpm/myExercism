var RobotName = function() {
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split('');
    this.numbers = "1234567890".split('');

    this.name = this.nameIt();
    while (RobotName.usedNames[this.name]) {
      this.name = this.nameIt();
    }
    RobotName.usedNames[this.name] = true;
}

RobotName.usedNames = {}

RobotName.prototype.nameIt = function() {
  //get 2 random letters and 3 random numbers
  var letter1 = this.letters[Math.floor(Math.random() * this.letters.length)];
  var letter2 = this.letters[Math.floor(Math.random() * this.letters.length)];

  var number1 = this.numbers[Math.floor(Math.random() * this.numbers.length)];
  var number2 = this.numbers[Math.floor(Math.random() * this.numbers.length)];
  var number3 = this.numbers[Math.floor(Math.random() * this.numbers.length)];

  return letter1 + letter2 + number1 + number2 + number3;
}

RobotName.prototype.reset = function() {
  while (RobotName.usedNames[this.name]) {
    this.name = this.nameIt();
  }
  RobotName.usedNames[this.name] = true;
}

module.exports = RobotName;
