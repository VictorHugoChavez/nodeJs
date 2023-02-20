function soyAsincrona(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`Hola mi nombre es ${nombre}`)
            resolve(nombre)
        }, 2000)
    })
}
//------
function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hasta luego.... ${nombre}`)
            resolve(nombre)
        }, 2000)
    })
}

function hablar(callbacks) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla bla bla')
                //resolve(callbacks)
            reject('Hay un error')
        }, 2000)
    })
}

console.log('Iniciando proceso')
soyAsincrona('Victor')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso')
    })
    .catch((error) => {
        console.error('Ha vido un error')
        console.error(error)
    })