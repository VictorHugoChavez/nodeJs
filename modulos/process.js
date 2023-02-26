//const process = require('process');

process.on('beforeExit', () => {
        console.log('El proceso va a terminar')
    }) // antes de que se salga de la ejecuion

process.on('exit', () => {
        console.log('El proceso se ha terminado')
    }) // se salio de la ejecuion y ya no realizara mas acciones

process.on('uncaughtException', (err, exp) => {
        console.error('Vaya ha vido un error dentro de  la funcion')
        console.error(err)
    }) // es oara que cuando haya un error en nuestra ejecucion

noExiste()
console.log('Esto si el error no se recoje, no sale')