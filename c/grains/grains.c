#include "grains.h"

uint64_t square(uint8_t index)
{
    uint64_t value_square = 1;
    if (index == 0 || index > 64){
        return 0;
    }
    for (int i = 2 ; i <= index ; i++){
        value_square = value_square * 2;
    }

    return value_square;
}

uint64_t total(void)
{
    uint64_t total = 0;
    for (int i = 1 ; i <= 64 ; i++){
        total += square(i);
    }
    return total;
}