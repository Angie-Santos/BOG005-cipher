const cipher = {
  encode(offset, string) {
    if (!offset || !string) {
      throw new TypeError("invalid parameters");
    }
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        newString += String.fromCharCode(((string[i].charCodeAt()) - 65 + offset) % 26 + 65);
      } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
        newString += String.fromCharCode(((string[i].charCodeAt()) - 97 + offset) % 26 + 97);
      } else if (string[i].charCodeAt() === 193) {
        newString += String.fromCharCode((65 - 65 + offset) % 26 + 65);
      } else if (string[i].charCodeAt() === 201) {
        newString += String.fromCharCode((69 - 65 + offset) % 26 + 65);
      } else if (string[i].charCodeAt() === 205) {
        newString += String.fromCharCode((73 - 65 + offset) % 26 + 65);
      } else if (string[i].charCodeAt() === 211) {
        newString += String.fromCharCode((79 - 65 + offset) % 26 + 65);
      } else if (string[i].charCodeAt() === 218) {
        newString += String.fromCharCode((85 - 65 + offset) % 26 + 65);
      } else if (string[i].charCodeAt() === 225) {
        newString += String.fromCharCode((97 - 97 + offset) % 26 + 97);
      } else if (string[i].charCodeAt() === 233) {
        newString += String.fromCharCode((101 - 97 + offset) % 26 + 97);
      } else if (string[i].charCodeAt() === 237) {
        newString += String.fromCharCode((105 - 97 + offset) % 26 + 97);
      } else if (string[i].charCodeAt() === 243) {
        newString += String.fromCharCode((111 - 97 + offset) % 26 + 97);
      } else if (string[i].charCodeAt() === 250) {
        newString += String.fromCharCode((117 - 97 + offset) % 26 + 97);
      } else {
        newString += string[i];
      }
    }
    return newString;
  },
  decode(offset, string) {
    if (!offset || !string) {
      throw new TypeError("invalid parameters");
    }
    let newStringDecode = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        newStringDecode += String.fromCharCode(((string[i].charCodeAt()) - 90 - offset)%26 + 90);
      } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
        newStringDecode += String.fromCharCode(((string[i].charCodeAt())  - 122 - offset)%26 + 122);
      } else {
        newStringDecode += string[i];
      }
    }
    return newStringDecode;
  }
}; export default cipher;