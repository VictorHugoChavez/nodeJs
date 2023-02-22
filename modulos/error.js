function seRompe() {
    return 3 + z
}

function otraFunction() {
    seRompe()
}

function seRompeAsincrona() {
    setTimeout(function() {
        try {
            return 3 + z
        } catch (e) {
            console.log(e.message)
        }
    }, 3000)
}

try {
    seRompeAsincrona()
} catch (e) {
    console.error('Error en sistema')
    console.error(e.message) // el imprimir solo e.messasge solo nos mostrara el mesnaje y no toda la funcion que tenemos
    console.error('Pero no pasa nada hemos cpatura el error sin problema ')
}
console.log('Afuera de los errores')