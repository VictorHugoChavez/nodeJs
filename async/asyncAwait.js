async function soyAsincrona(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`Hola mi nombre es ${nombre}`)
            resolve(nombre)
        }, 2000)
    })
}
//------
async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hasta luego.... ${nombre}`)
            resolve(nombre)
        }, 2000)
    })
}

async function hablar(callbacks) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla bla bla')
                //resolve(callbacks)
            resolve('Hay un error')
        }, 2000)
    })
}

async function main() {
    let nombre = await soyAsincrona('Victor')
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('Terminamos')
}
console.log('Epezamos el proceso')
main()
console.log('Terminamos proceso')