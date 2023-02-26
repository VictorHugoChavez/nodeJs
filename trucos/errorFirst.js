function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000);
}

try {
    asincrona(function(error, dato) {
        if (error) {
            console.error('Tenemos un error');
            console.error(error);
            return false;
            // throw error;
        }
        console.log('Todo ha ido bien, mi dato es ' + dato);
    });
} catch (e) {
    console.error('se ha cpaturado el error');
    console.error(e);
}