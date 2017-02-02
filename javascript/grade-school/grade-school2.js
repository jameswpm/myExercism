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
  var index = this.indexToInsert(this.db[grade], name.toLowerCase());
  this.db[grade].splice(index, 0, name);
}

School.prototype.grade = function(grade) {
  if (this.db.hasOwnProperty(grade)) {
    return this.db[grade];
  }
  return [];
}

School.prototype.indexToInsert = function(arr, value) {
  var low = 0;
  var high = arr.length;
  var mid = -1;

  while(low < high) {
     mid = Math.floor((low + high)/2);

     if(arr[mid].localeCompare(value) < 0) {
        low = mid + 1;
     } else if(arr[mid].localeCompare(value) > 0) {
        high = mid;
     } else {
        return mid;
     }
  }
  return low;
}

module.exports = School;
