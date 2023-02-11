function rot13(str) {
    const alphabet = {'A':'N','B':'O','C':'P','D':'Q','E':'R','F':'S','G':'T','H':'U','I':'V','J':'W','K':'X','L':'Y','M':'Z','N':'A','O':'B','P':'C','Q':'D','R':'E','S':'F','T':'G','U':'H','V':'I','W':'J','X':'K','Y':'L','Z':'M'}
    const pattern = /[^A-Z0-9]/ig;
    str = str.split('')
      console.log(str)
    for(var i=0;i<str.length;i++){
      if(str[i] == ' ') {
        str[i] = ' '
      } else if (str[i].match(pattern)) {
        str[i] = str[i]
      }
      else {str[i] = alphabet[str[i]]}
    }
      console.log(str)
    str = str.join('')
      console.log(str)
      return str;
    }
    
    rot13("SERR PBQR PNZC");