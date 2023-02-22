const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        cb(data.toString());
    })
}

function borrar(ruta, cl) {
    fs.unlink(ruta, (cl) => {
        if (cl) throw cl;
        console.log('El archivo ha sido eliminado exitosamente');
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito corectamente')
        }
    })
}

//leer(__dirname + '/archivos.txt', console.log)
//escribir(__dirname + '/archivo.txt', 'Soy un archivo creado nuevo hdjhdakjdhadjkashkjsdh dsasas', console.log)
//borrar(__dirname + '/archivos.txt', console.log)


function leerPromise(ruta, cb) {
    return new Promise(function(resolve, reject) {
        let read = fs.readFile(ruta, (error, data) => {
            cb(data.toString());
        })
        resolve(read)
    }, 5000)
}
leerPromise(__dirname + '/archivo.txt', console.log)