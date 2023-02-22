const { exec, spawn } = require('child_process')
const { stdout } = require('process')

//ES para trabajar un proceso por debajo del que tenemos
/*
exec('ls', (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout)
})
*/

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid) //indica el numero de proceso con .pid
console.log(proceso.connected)

proceso.stdout.on('data', function(dato) {
    console.log(dato.toString())
})

proceso.on('exit', function() {
    console.log('Termino el proceso')
})