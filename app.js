// const fs = require('fs');
const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); //require llamado con destructuración de 
//module.exports, el objeto tiene un método llamado crearArchivo, con destructuración se extrae ese atributo

//console.log(module);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ` + colors.green(`%s`), archivo))
            .catch(err => {
                console.log(err);
            })
        break;
    default:
        console.log('comando no reconocido');
}


//console.log(process.argv);
//let argv2 = process.argv; // node app --base=4
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log('limite: ', argv.limite);


// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += `${base}*${i}= ${base*i} \n`;
// }



// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });