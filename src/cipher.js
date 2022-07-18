const cipher = {


  encode(offset, string){
    if(!offset || !string){
      throw new TypeError("invalid parameters");
    }
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      newString += String.fromCharCode(((string[i].charCodeAt())-65+offset)%26+65);
    }
    return newString;
  },


  decode(offset, string){
    
    if(!offset || !string){
      throw new TypeError("invalid parameters");
    }
    let newStringDecode = "";
    for (let i = 0; i < string.length; i++) {
      newStringDecode += String.fromCharCode(((string[i].charCodeAt())+65-offset)%26+65);
    }
    return newStringDecode;
  } 


}; export default cipher; 