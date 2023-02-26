const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
let readbleStream = fs.createReadStream(__dirname + '/inpunt.txt');

readbleStream.setEncoding('utf-8');
/*
readbleStream.on('data', function(chunk) {
    data += chunk;
});

readbleStream.on('end', function() {
    console.log(data);
});

*/
process.stdout.write('Hola');
process.stdout.write('que');
process.stdout.write('atl');

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
};

var mayus = new Mayus();
readbleStream.pipe(mayus).pipe(process.stdout);