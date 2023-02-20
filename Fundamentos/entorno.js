let saludo = 'Hola';
console.log(saludo);

//Variables de entorno

//Sirve para solicitar las variables fuera del entorno, se indica process.env y la variable, en este caso se tiene declara desde la terminal
//la variabke que declaro indicado el valor y despues node y la ubicacion del archivo NOMBRE=VictorHugo  node Fundamentos/entorno.js
// si se envia solo sin dar informacion solo hara que haga por defecto los valores y esto son buenas practicas 
let nombre = process.env.NOMBRE || 'Sin nombre'; // se declara una varibale por defecto en caso de que no se tenga
let edad = process.env.EDAD || 'N/A';

console.log('Hola mi nombre es ' + nombre)
if (edad > 18) {
    console.log('Eres mayor de edad teniendo ' + edad);
}

console.log('Soy un nuevo mensaje')
    //NODEMON
    //realiza una reejcucion dentro de nuestros ccambios sin la nesesidad de hacerlo
    //DOCUMENTACION ACERCA DE NODEMON 

//https://www.npmjs.com/package/nodemon

console.log('NODEMON TAMERS')

//Exieste otro que tambien ayuda para desarrollr dentro de node.js, ademas de que monitorea toda nuestra aplicacion, pero sirve para algo muy complejo 

//https://www.npmjs.com/package/pm2


//$ pm2 start Fundamentos/entorno.js  inicia una palicacion 
//$ pm2 monitor -- nos dara una inforacion de nuestra aplicacion
//$ pm2 status -- da un estatus actual sobre nuestra aplicacion 
//$ pm2 logs -- nos informa cuantos hilos se estan ejeuctando 
//$ pm2 stop 0 -- realiza que pm2 pare el proceso y no se ejecute