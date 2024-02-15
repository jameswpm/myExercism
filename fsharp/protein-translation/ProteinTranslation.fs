module ProteinTranslation

let proteins (rna: string) =
    let getCodons (rna: string) =
        let rec loop index =
            if index + 2 < rna.Length then
                let substring = rna.[index..(index + 2)]
                substring :: (loop (index + 3))
            else
                []
        loop 0

    let getProteins (codons : string list) : string list =
        let rec loop codons acc =
            match codons with
            | [] -> List.rev acc
            | hd::tl ->
                match hd with
                | "AUG" -> loop tl ("Methionine"::acc)
                | "UUU" | "UUC" -> loop tl ("Phenylalanine"::acc)
                | "UUA" | "UUG" -> loop tl ("Leucine"::acc)
                | "UCU" | "UCC" | "UCA" | "UCG" -> loop tl ("Serine"::acc)
                | "UAU" | "UAC" -> loop tl ("Tyrosine"::acc)
                | "UGU" | "UGC" -> loop tl ("Cysteine"::acc)
                | "UGG" -> loop tl ("Tryptophan"::acc)
                | "UAA" | "UAG" | "UGA" -> List.rev acc
                | _ -> failwith "Invalid codon"
        loop codons []

    let codons = getCodons rna
    getProteins codons




  


