using System;
using System.Collections;
using System.Collections.Generic;

public static class ProteinTranslation
{
    public static string[] codons;
    public static string codon;
    public static List<string> proteins = new List<string>();
    public static List<string> listCodons = new List<string>();
    
    public static string[] Proteins(string strand)
    {  
        bool stop = false;
        proteins.Clear();
        codons = getCodons(strand);
        foreach (string c in codons) {
            if (stop){
                break;
            }
            switch(c) {
                case "AUG":
                    proteins.Add("Methionine");
                    break;
                case "UUU":
                case "UUC":
                    proteins.Add("Phenylalanine");
                    break;
                case "UUA":
                case "UUG":
                    proteins.Add("Leucine");
                    break;
                case "UCU":
                case "UCC":
                case "UCA":
                case "UCG":
                    proteins.Add("Serine");
                    break;
                case "UAU":
                case "UAC":
                    proteins.Add("Tyrosine");
                    break;
                case "UGU":
                case "UGC":
                    proteins.Add("Cysteine");
                    break;
                case "UGG":
                    proteins.Add("Tryptophan");
                    break;
                case "UAA":
                case "UAG":
                case "UGA":
                    //STOP
                    stop = true;
                    break;
            }
        }

        return proteins.ToArray();
    }

    public static string[] getCodons(string rna) {

        listCodons.Clear();
        for (int i = 0; i + 2 < rna.Length; i += 3) { 
            codon = "" + rna[i] + rna[i +1] + rna [i+2];
            listCodons.Add(codon);
        }
        return listCodons.ToArray();
    }
}