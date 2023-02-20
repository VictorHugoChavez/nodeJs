function soyAsincrona(nombre, callback) {
    setTimeout(function() {
        console.log(`Hola mi nombre es ${nombre}`)
        callback()
    }, 2000)
}

function adios(nombre, otrocallback) {
    setTimeout(function() {
        console.log(`Hasta luego.... ${nombre}`)
        otrocallback();
    }, 2000)
}

console.log('Inicaindo proceso de seleccion  ...');
soyAsincrona('Victor', function() {
    adios('Victor', function() {
        console.log('Terminando proceso de seleccion ...');
    })
});