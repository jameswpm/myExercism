var Hamming = function() {};

Hamming.prototype.compute = function(seqA, seqB) {
  if (seqA.length != seqB.length) {
    throw "DNA strands must be of equal length.";
  }
  var length = seqA.length;
  var diff = 0;
  for (var i = 0; i < length; i++) {
    if (seqA[i] != seqB[i]) {
      diff++;
    }
  }
  return diff;
}

module.exports = Hamming;
