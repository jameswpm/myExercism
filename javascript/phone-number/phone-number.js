var PhoneNumber = function(phoneInput) {
  this.phone = phoneInput.trim().match(/[0-9]/g);
}

PhoneNumber.prototype.number = function() {
  if (this.phone.length > 11  || this.phone.length < 10) {
    return "0000000000";
  }
  if (this.phone.length === 11) {
    if (this.phone[0] == 1) {
      this.phone.splice(0,1);
    } else {
      return "0000000000";
    }
  }
  return this.phone.join("");
}

PhoneNumber.prototype.areaCode = function() {
  return this.phone.slice(0,3).join("");
}

PhoneNumber.prototype.toString = function() {
  return ("(" + this.areaCode() + ") " + this.phone.slice(3,6).join("") + "-" + this.phone.slice(6).join(""));
}

module.exports = PhoneNumber;
