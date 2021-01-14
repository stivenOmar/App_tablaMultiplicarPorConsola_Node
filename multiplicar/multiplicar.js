const fileSystem = require('fs');
const colors = require('colors');

function tablaDel(base = 1, limite = 10) {
    let contenido = '';
    for (let index = 1; index <= limite; index++) {
        contenido += `${base} * ${index} = ${base * index} \n`
    }
    return contenido;
}

function listar(base, limite) {
    console.log(tablaDel(base, limite));
}


function crearArchivo(base, limite) {

    return new Promise((resolve, reject) => {

        if (isNaN(base) || isNaN(limite)) {
            reject("Argumentos no validos deben ser numeros");
            return;
        }

        let contenido = tablaDel(base, limite);

        fileSystem.writeFile(`./tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(colors.yellow(`*** tabla-${base} creada`));
            }
        })
    })

}

module.exports = {
    crearArchivo,
    listar
}