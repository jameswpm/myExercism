I need to create a special condition to deal with the use of "constructor" as an index of the object. i don't understand well the reason, but the last test case fails without the following if.

        if (word == "constructor") {
          wordCount[word] = 1;
        }
