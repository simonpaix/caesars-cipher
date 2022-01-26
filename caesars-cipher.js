function rot13(str) {
  let rot13Str = "";
  const offset = 13;

  for (let char in str) {
    if (str.charCodeAt(char) > 64 && str.charCodeAt(char) < 91) {
      let code = str.charCodeAt(char);
      console.log(str[char] + code);
      (code + offset) % 91 > 64 ?
        code += offset :
        code = (code + offset) % 91 + 65;

      console.log("new code" + code);
      rot13Str += String.fromCharCode(code);
    }
    else {
      rot13Str += str[char];
    }
  }
  console.log(rot13Str);
  return rot13Str;
}

rot13("SERR CVMMN!");