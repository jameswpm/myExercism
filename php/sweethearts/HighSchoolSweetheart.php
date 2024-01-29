<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        $i = 0;
        while ($i <= strlen($name)) {
            if ($name[$i] != " ") {
                return $name[$i];
            }
            $i++;
        }
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
        $name_last = explode(" ", $name);
        return $this->initial($name_last[0]) . " " .  $this->initial($name_last[1]);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        return <<<HEART
     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     {$this->initials($sweetheart_a)}  +  {$this->initials($sweetheart_b)}     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *
HEART;
    }
}
