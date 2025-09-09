#include "binary.h"

int convert(const char *input)
{
    int dec = 0;
    int size = strlen(input);
    int last_index = size -1;
    for (int i = 0; i < size; i++) {
        if (input[i] != '1' && (int) input[i] != '0') {
            return INVALID;
        } 
        if (input[i] == '1') {
            dec +=  pow(2, (last_index - i));
        }
    }

    return dec;
}