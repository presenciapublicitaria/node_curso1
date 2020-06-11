// Requierds  
// Propio de node que se escribe como se ve abajo
const archivo = require('fs');
// Los no nativos o externos que trabaja con una instalación previa
// Los propios creados por el desarrollador se escribe como require(./libreria)
const colors = require('colors');
//Sirve para poner color en la tabla que se muestra


let listarTabla = (base, limite) => {

    let dato = '';

    for (let c = 1; c <= limite; c++) {

        let resuma = base * c

        dato += `${ base } * ${ c } = ${ resuma } \n `

    }

    console.log(dato.bgGreen.white);

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i

            data += `${ base } * ${ i } = ${ resultado } \n`;

        }

        archivo.writeFile(`./tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}