#include "resistor_color_duo.h"

int color_code(resistor_band_t *codes)
{
    char s1[20]; 
    char s2[20];
    
    sprintf(s1, "%d", codes[0]); 
    sprintf(s2, "%d", codes[1]); 
  
    strcat(s1, s2); 
  
    int c = atoi(s1); 
    return c;
}