module ProteinTranslation
  def self.proteins(strand : String) : Array(String)
    # Write your code for the 'Protein Translation' exercise in this file.
    codons = self.get_codons(strand)
    proteins = Array(String).new
    codons.each do |c|
      if c.size < 3
        raise ArgumentError.new("Unknown strand")
      end
      case c
        when "AUG"
          proteins << "Methionine"
        when "UUU", "UUC"
          proteins << "Phenylalanine"
        when "UUA", "UUG"
          proteins << "Leucine"
        when "UCU" , "UCC" , "UCA" , "UCG"
          proteins << "Serine"
        when  "UAU" , "UAC"
          proteins << "Tyrosine"
        when "UGU" , "UGC"
          proteins << "Cysteine"
        when "UGG"
          proteins << "Tryptophan"
        when "UAA" , "UAG" , "UGA"
          break
        else
          raise ArgumentError.new("Unknown strand")
      end
    end
    proteins
  end

  def self.get_codons(rna : String) : Array(String)
    counter = 0
    codons = Array(String).new
    while counter + 2 < rna.size
      codon = "#{rna[counter]}" + "#{rna[counter +1]}" + "#{rna[counter + 2]}"
      codons << codon
      counter += 3
    end
    if counter < rna.size
      fin = rna.size - 1
      codons << rna[counter, fin]
    end
    codons
  end
end
