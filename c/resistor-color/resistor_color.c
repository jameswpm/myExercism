#include "resistor_color.h"
#include <stdlib.h>


int color_code(resistor_band_t color_code)
{
    return color_code;
}

resistor_band_t* colors()
{

    resistor_band_t* ret = malloc(10 * sizeof(resistor_band_t));


    if (ret == NULL) {
        return NULL; 
    }

    // Fill in the array with the enum values
    ret[0] = BLACK;
    ret[1] = BROWN;
    ret[2] = RED;
    ret[3] = ORANGE;
    ret[4] = YELLOW;
    ret[5] = GREEN;
    ret[6] = BLUE;
    ret[7] = VIOLET;
    ret[8] = GREY;
    ret[9] = WHITE;

    return ret;
}