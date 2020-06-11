const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// let base = 'cristian';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        // console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.rainbow(archivo) }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


// console.log(argv);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);