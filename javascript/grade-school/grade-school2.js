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
  //this.db[grade].push(index);
  this.db[grade].splice(index, 0, name);
  //this.db[grade].sort();
}

School.prototype.grade = function(grade) {
  if (this.db.hasOwnProperty(grade)) {
    return this.db[grade];
  }
  return [];
}

School.prototype.indexToInsert = function(arr, value) {
   var low = 0;
   var high = arr.length - 1;
   var mid = -1;
   var current;

   while(low <= high) {
      mid = Math.floor((low + high) / 2);
      current = arr[mid];
      if (current > value) {
        low = mid + 1;
      }
      else if(current < value) {
         high = mid - 1;
      } else {
          return mid;
      }
   }
   return -1;//not found
}

module.exports = School;
