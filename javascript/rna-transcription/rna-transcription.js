var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var rna = '';
  //iterate over the dna strand, check each nucleotides and include the correspondent nucleotide in the rna strand
  for (var i = 0; i < dna.length; i++) {
    switch (dna.charAt(i)) {
      case "C":
        rna += "G";
        break;
      case "G":
        rna += "C";
        break;
      case "A":
        rna += "U";
        break;
      case "T":
        rna += "A";
        break;
    }
  }
  return rna;
}

module.exports = DnaTranscriber;
