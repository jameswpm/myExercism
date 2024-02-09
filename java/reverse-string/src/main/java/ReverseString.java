class ReverseString {

    String reverse(String inputString) {
        char ch;
        String nstr="";
       
     
      for (int i=0; i < inputString.length(); i++)
      {
        ch= inputString.charAt(i);
        nstr= ch+nstr;
      }
      return nstr;
    }
  
}
