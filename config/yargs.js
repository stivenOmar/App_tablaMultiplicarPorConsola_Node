const paqueteYargs = require('yargs');


function crearComando(titulo, descripcion, argumentos) {
    let objetoComando = {};
    for (const argumento of argumentos) {
        objetoComando[argumento] = {
            alias: argumento.charAt()
        }
    }
    paqueteYargs.command(titulo, descripcion, objetoComando);
}

function estadoArgv() {
    return paqueteYargs.argv;
}

function valorPropiedadArgv(prop) {
    return estadoArgv()[prop];
}

module.exports = {
    crearComando,
    estadoArgv,
    valorPropiedadArgv
}