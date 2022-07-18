import cipher from './cipher.js';

//Pasar de displays

const buttonContinue = document.getElementById("buttonContinue");
buttonContinue.addEventListener("click",changeDisplay);

function changeDisplay(){
    document.getElementById("Welcome").style.display="none";
    document.getElementsByTagName("main")[0].style.display="block";
}

//obtener las variables del formulario y enviar nuevo resultado

const form = document.formulario;
form.onsubmit = function (event){
    event.preventDefault();
    let offset = parseInt(form.offset.value);
    let string = form.textBox1.value;
    document.getElementById("result").innerHTML = cipher.encode(offset,string);
    
}


//document.getElementById("result").textContent = 


