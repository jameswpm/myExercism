var School = function () {
  this.db = {};
}

School.prototype.roster = function() {
  return this.db;
}

School.prototype.add = function(name, grade) {
  if (!this.db.hasOwnProperty(grade)) {
    this.db[grade] = [];
  }
  this.db[grade].push(name);
  this.db[grade].sort();
}

School.prototype.grade = function(grade) {
  if (this.db.hasOwnProperty(grade)) {
    return this.db[grade];
  }
  return [];
}

module.exports = School;
