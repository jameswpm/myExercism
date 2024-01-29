proc reverse*(s: string): string =
  var new = ""
  var size = len(s) - 1 
  while size >= 0:
    new.add(s[size])
    size -= 1
  return new
