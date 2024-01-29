<?php

class PizzaPi
{
    public function calculateDoughRequirement($numberOfPizzas, $numberOfPersons)
    {
        return $numberOfPizzas * (($numberOfPersons * 20) + 200);
    }

    public function calculateSauceRequirement($numberOfPizzas, $canVolume)
    {
        return ($numberOfPizzas * 125) / $canVolume;
    }

    public function calculateCheeseCubeCoverage($cheeseSideLenght, $desiredThickness, $pizzaDiameter)
    {
        return (int) (($cheeseSideLenght ** 3) / ($desiredThickness * 3.14 * $pizzaDiameter));
    }

    public function calculateLeftOverSlices($numberOfPizzas, $numberOfFriends)
    {
        return ($numberOfPizzas * 8) % $numberOfFriends;
    }
}
