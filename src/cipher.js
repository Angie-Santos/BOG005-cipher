const cipher = {
  encode(offset, string){
/*
    var offsetString = offset%26;
    var newString = "";
    for (let i = 0; i < string.length; i++) {
      newString += String.fromCharCode(string[i].charCodeAt()+offsetString);
    }
   */ 

    //var offsetString = offset%26;
    var newString = "";
    for (let i = 0; i < string.length; i++) {
      newString += String.fromCharCode(((string[i].charCodeAt())-65+offset)%26+65);
    }
    return newString;
  },
  decode(offset, string){
  
  var newStringDecode = "";
    for (let i = 0; i < string.length; i++) {
      newStringDecode += String.fromCharCode(((string[i].charCodeAt())+65-offset)%26+65);
    }
    console.log(newStringDecode);
    return newStringDecode;
  } 

}; export default cipher; 
