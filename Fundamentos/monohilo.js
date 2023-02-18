console.log("Hola Mundo");
/*SETINTERVA - RSecive dos arguntos uno es la funcion y el segundo el tiempo que se va ejecutar
 *
 */
let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    if (i === 5) {
        console.log('Error');
        try {
            var a = i + k;
        } catch (e) {
            console.log('Error en el sistema');

        } finally {
            console.log('Finalizado el programa');
        }

    }
}, 1000);
console.log('Segunda Instruccion');