import cipher from './cipher.js';

//console.log(cipher);

//Pasar de displays

const buttonContinue = document.getElementById("buttonContinue");
buttonContinue.addEventListener("click",changeDisplay);

function changeDisplay(){
    document.getElementById("Welcome").style.display="none";
    document.getElementsByTagName("main")[0].style.display="block";
}

//obtener las variables del formulario


const form = document.formulario;
form.onsubmit = function (event){
    event.preventDefault();
    var offset = form.offset.value;
    var string = form.textBox1.value;
    cipher.decode(offset,string)
}




