import cipher from './cipher.js';

//Pasar de displays

const buttonContinue = document.getElementById("buttonContinue");
buttonContinue.addEventListener("click", changeDisplay);

function changeDisplay() {
    document.getElementById("Welcome").style.display = "none";
    document.getElementsByTagName("main")[0].style.display = "block";
}

//obtener las variables del formulario y enviar nuevo resultado

const buttonEncode = document.getElementById("buttonEncode");
    buttonEncode.addEventListener("click", encode);
    
function encode(){
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("textBox1").value;
    document.getElementById("result").textContent = cipher.encode(offset, string);
}

const buttonDecode = document.getElementById("buttonDecode");
    buttonDecode.addEventListener("click", decode);
    
function decode(){
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("textBox1").value;
    document.getElementById("result").textContent = cipher.decode(offset, string);
}

