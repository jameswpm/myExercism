class SqueakyClean {
    static String clean(String identifier) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < identifier.length() ; i++) {
            char letterCheck = identifier.charAt(i);
            if (letterCheck == '-') {
                char next = identifier.charAt(i + 1);
                sb.append(Character.toUpperCase(next));
                i++;
            } else {
                sb.append(letterCheck);
            }  
        }

        String newIdentifier = sb.toString();
        StringBuilder sbFinal = new StringBuilder();
        for (int j = 0; j < newIdentifier.length() ; j++) {
            char letterCheck = newIdentifier.charAt(j);
            String letterReplace = getReplacement(letterCheck);
            if (letterReplace != "") {
                sbFinal.append(letterReplace);
            }     
        }

        return sbFinal.toString();
    }

    static String getReplacement(char letter) {
        if (letter == ' ') {
                return "_";
        }
        
        if (Character.isISOControl(letter)) {
                return "CTRL";
        } 
        
        if (Character.isLetter(letter) && !(letter >= 945 && letter <= 969)) {
            return Character.toString(letter);
        }

        return "";
    }

    public static void main(String[] args) {
        System.out.println(clean("9 -abcĐ\\uD83D\uDE00ω\0"));
    }
}
