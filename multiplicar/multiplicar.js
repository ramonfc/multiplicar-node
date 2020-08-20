const fs = require('fs'); //de express
const { resolve } = require('path');
const colors = require('colors');



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor ingresado ${base} no es un número`);
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}= ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });

    })
}

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`   Tabla de ${base}`.green);
    console.log('===================='.green);

    if (!Number(base)) {
        console.log(`el valor ingresado ${base} no es un número`);

    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base}*${i}= ${base*i} \n`;
    }

    console.log(data);
}


module.exports = {
    crearArchivo,
    listarTabla
}