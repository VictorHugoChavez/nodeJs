//console.log(global);

let i = 0;
let intervalo = setInterval(function() {
    console.log('Hola');
    if (i === 10) {
        clearInterval(intervalo) // es para finalizar nuestras peticiones
    }
    i++;
}, 1000)

//Modulos
//require();

global.miVariable = 'El valor';

console.log(miVariable)