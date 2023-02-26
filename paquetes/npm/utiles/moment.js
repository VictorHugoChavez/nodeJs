const moment = require('moment');

let ahora = moment();
console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
// esto va ser para fechas, moment nos ayudara a traer la informacion de fechas dando con formatos o generico de la libreria, la primera es en generico y el segundo como yo quiero que lo adecue