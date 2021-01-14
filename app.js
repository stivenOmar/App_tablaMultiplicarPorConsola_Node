const multiplicar = require('./multiplicar/multiplicar');
const yargs = require('./config/yargs')


switch (yargs.estadoArgv()._[0]) {
    case "listar":
        yargs.crearComando('listar', 'lista tabla de multiplicar en consola', ['base', 'limite']);
        multiplicar.listar(yargs.valorPropiedadArgv('base'), yargs.valorPropiedadArgv('limite'));
        break;

    case "crear":
        yargs.crearComando('crear', 'crea archivo de tabla de multiplicar', ['base', 'limite']);
        multiplicar.crearArchivo(yargs.valorPropiedadArgv('base'), yargs.valorPropiedadArgv('limite'))
            .then((resp) => {
                console.log(resp);
            }).catch((error) => {
                console.log(error);
            })
        break;
    default:
        break;
}