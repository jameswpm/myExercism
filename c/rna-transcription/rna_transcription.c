#include "rna_transcription.h"

char *to_rna(const char *dna)
{
    
    if (dna == NULL) {
        char *empty = (char *) calloc(1, sizeof(char));
        return empty;
    }

    size_t size_dna = strlen(dna);

    char *rna = (char *) calloc(size_dna + 1, sizeof(char));
    if (rna == NULL) {
        return NULL;
    }

    for (size_t i = 0; i < size_dna; i++) {
        switch (dna[i]) {
            case 'G': rna[i] = 'C'; break;
            case 'C': rna[i] = 'G'; break;
            case 'T': rna[i] = 'A'; break;
            case 'A': rna[i] = 'U'; break;
        }
    }

    return rna;
}