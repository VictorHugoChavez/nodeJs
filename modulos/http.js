const http = require('http')

http
    .createServer(function(req, res) {
        console.log('Nueva peticion')
        console.log(req.url)
        res.writeHead(202, { 'Content-Type': 'text/plain' })

        res.write('Hola, ya se usar HTTP de nodeJs')
        res.end()
    })
    .listen(3000)

console.log('Se esta escuchandi en el puerto 3000')