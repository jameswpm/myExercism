#include "darts.h"

uint8_t score(coordinate_t landing_position)
{
    /**
    To find the radius of a circle using coordinates, you need to know the coordinates of the center of the circle and a point on the circle. So, the radius of the circle (r) can be found using the formula: r = sqrt(( x 2 − x 1 )^ 2 + ( y 2 − y 1 ) ^ 2).**/
    double radius = fabs(sqrt(pow(landing_position.x, 2) + pow (landing_position.y, 2)));
    if (radius <= 1) {
        return 10;
    }
    if (radius <= 5) {
        return 5;
    }
    if (radius <= 10) {
        return 1;
    }
    return 0;  
        
}