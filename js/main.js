// nombre de usuario
var $names = document.getElementById('names');
// mostrar nombre de usuario
var $nombreu = document.getElementById('nombreu');
// numero de tarjeta
var $number = document.getElementById('number');
// mostrar numero de tarjeta
var $tarjetau = document.getElementById('tarjetau');
// fecha usuario
var $fecha1 = document.getElementById('date1');
var $fecha2 = document.getElementById('date2');
// mostrar la fecha
var $fechau = document.getElementById('fecha');
//codigo usuario
var $cvc = document.getElementById('cvc');
// mostrar codigo
var $cvcu = document.getElementById('cvcu');


// Todos los nombres mal
var $nommal = document.getElementById('nombremal');
var $nommal1 = document.getElementById('nombremal1');
var $nommal2 = document.getElementById('nombremal2');
var $nommal3 = document.getElementById('nombremal3');

function nombres(){
    var nombre =$names.value;
    var number = $number.value;
    var fecha1 = $fecha1.value;
    var fecha2 = $fecha2.value;
    var cvc = $cvc.value;
    
    if(nombre == ""){
        $nommal.classList.remove("activar");
        console.log("esta vacio");
    }else{
        $nommal.classList.add("activar");
        $nombreu.innerText = nombre;
        console.log("Esta lleno")
    }
    if(number == ""){
        $nommal1.classList.remove("activar");
        
    }else{
        $nommal1.classList.add("activar");
        $tarjetau.innerText = number;
        console.log("lleno");
    }

    if(fecha1 == "" || fecha2 == ""){
        $nommal2.classList.remove("activar");
    }else{
        $nommal2.classList.add("activar");
        $fechau.innerText = fecha1 + "/" + fecha2 ;
    }

    if(cvc == ""){
        $nommal3.classList.remove("activar");
    }else{
        $nommal3.classList.add("activar");
        $cvcu.innerText = cvc;
    }

}