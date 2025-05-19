#include "space_age.h"


float age(planet_t planet, int64_t seconds)
{
    float earth_years = 31557600;

    switch (planet) {
        case MERCURY:
            return seconds / (earth_years * 0.2408467);
        case VENUS:
            return seconds / (earth_years * 0.61519726);
        case EARTH:
            return seconds / earth_years;
        case MARS:
            return seconds / (earth_years * 1.8808158);
        case JUPITER:
             return seconds / (earth_years * 11.862615);
        case SATURN:
             return seconds / (earth_years * 29.447498);
        case URANUS:
             return seconds / (earth_years * 84.016846);
        case NEPTUNE:
             return seconds / (earth_years * 164.79132);
        default:
            return -1;
    }
}