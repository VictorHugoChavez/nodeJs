let buffer = Buffer.alloc(1); //guarda el numero de bytes que nosotros queramos

let buffer1 = Buffer.from([1, 2, 4, 8, 3, 7, 9]);

let buffer2 = Buffer.from('Hola mi nombres goku');
console.log(buffer);
console.log(buffer1);
console.log(buffer2); // como es un string lo transforma en hexadecimal, si requerimos que lo trasforme en texto hay que indicarlo
console.log(buffer2.toString());

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97; // los valores en hexadecimal del abecedario son del 97 para adelante
}

console.log(abc.toString());

//Buffer son datos binarios que se mueven de un lado a otro, siendo el espacion de memoria (RAM) en la que se almacena datos de manera temporal, siendo no un string encriptado