let saludo = 'Hola';
console.log(saludo);

//Variables de entorno
//Sirve para solicitar las variables fuera del entorno, se indica process.env y la variable, en este caso se tiene declara desde la terminal
//la variabke que declaro indicado el valor y despues node y la ubicacion del archivo NOMBRE=VictorHugo  node Fundamentos/entorno.js
let nombre = process.env.NOMBRE || 'Sin nombre'; // se declara una varibale por defecto en caso de que no se tenga
let edad = process.env.EDAD || 'N/A';

console.log('Hola mi nombre es ' + nombre)
if (edad > 18) {
    console.log('Eres mayor de edad teniendo ' + edad);
}