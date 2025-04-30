#include "hamming.h"

int compute(const char *lhs, const char *rhs)
{
    int lsize = strlen(lhs);
    int rsize = strlen(rhs);
    if (lsize != rsize) {
        return -1;
    }
    int diff = 0;
    for (int i = 0 ; i <= lsize; i++) {
        if (lhs[i] != rhs[i]) {
            diff++;
        }
    }
    return diff;
}