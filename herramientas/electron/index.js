const { app, BrowserWindow } = require('electron');

let mainWindown;

app.on('ready', crearVentana);

function crearVentana() {
    mainWindown = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWindown.loadFile('index.html');
}

// este es para ejecutar una palicacion desde node.js y hay que correrlo con npm run star y se ejecutar una ventana con lo que se realizo