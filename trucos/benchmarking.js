console.time('todo');
let suma = 0;
console.time('Bucle');
for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd('Bucle');
console.timeEnd('todo'); // ambas consololas deben de estar juntas, llamandose igual para que contavilice el tiempo

console.time('asincron');
console.log('Empieza el proceso aqui');
asincrona().then(() => {
    console.timeEnd('asincron');
});

function asincrona() {
    return new Promise((resolve) => {
        console.log('Termina el proceso asincron');
        resolve();
    });
}

// revisa cuanto tiempo se tarda en realizar las operaciones