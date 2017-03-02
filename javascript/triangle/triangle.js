var Triangle = function(a,b,c) {
  this.aSide = a;
  this.bSide = b;
  this.cSide = c;
}

Triangle.prototype.kind = function() {

  if(this.aSide <= 0 || this.bSide <= 0 || this.cSide <=0) {
    throw "ilegal size";
  }

  if ((this.aSide + this.bSide < this.cSide) || (this.aSide + this.cSide < this.bSide) || (this.bSide + this.cSide < this.aSide)){
    throw "violating triangle inequality";
  }

  if ((this.aSide + this.bSide == this.cSide) || (this.aSide + this.cSide == this.bSide) || (this.bSide + this.cSide == this.aSide)){
     return "degenerate triangle";
  }

  if ((this.aSide == this.bSide) && (this.bSide == this.cSide)) {
    return "equilateral";
  }

  if ((this.aSide == this.bSide) || (this.aSide == this.cSide) || (this.bSide == this.cSide)) {
    return "isosceles";
  }

  return "scalene";
}

module.exports = Triangle;
