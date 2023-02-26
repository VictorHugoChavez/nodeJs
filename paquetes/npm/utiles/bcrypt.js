const bcrypt = require('bcrypt');

const password = 'NuncaParesDeAprender';

bcrypt.hash(password, 8, function(err, hash) {
    console.log(hash);
    bcrypt.compare(password, hash, function(err, res) {
        // esta comparando si nuestra encriptacion y password son mismas, en caso de que cambiemos el parametro sera nos dara un false
        console.log(res);
    });
});