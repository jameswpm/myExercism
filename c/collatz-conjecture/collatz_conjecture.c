#include "collatz_conjecture.h"


int steps(int start)
{
    int steps_count = 0;
    long long n = start;
        
    if (start <= 0) {
        return ERROR_VALUE;
    }
    
    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = (n * 3) + 1;
        }
        steps_count++;
    }

    return steps_count;
}