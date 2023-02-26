const os = require('os');
console.log(os.arch()); // arquitectura

console.log(os.platform()); // nos dice si esta en una plataforma como linux, windows, mac, android

console.log(os.cpus().length); //vemos la informacion de nuestra computadora, los nucleos y lo que se esta ejecutand

console.log(os.constants); //ve lo que temos de constante en nuestra computadoras

console.log(os.freemem()); // nos indica los bytes libres de memoria

const SIZE = 1024;

function kb(bytes) {
    return bytes / SIZE;
}

function mb(bytes) {
    return kb(bytes / SIZE);
}

function gb(bytes) {
    return mb(bytes / SIZE);
}

console.log(kb(os.freemem()) + '  kbytes');
console.log(mb(os.freemem()) + '  megabytes');
console.log(gb(os.freemem()) + '  gigabytes'); // con esto se obtiene los valores disponible en gb

console.log(gb(os.totalmem())); // este es para el total de memoria dentro de mi computadora

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces()); // nos trae informacion de nuestra maquina como la ip la mascara etc, acerca de la red