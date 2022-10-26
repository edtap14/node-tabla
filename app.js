const crearArchivo = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const base = 6;
console.clear();

crearArchivo(argv.b, argv.h, argv.l)
	.then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
	.catch((err) => console.log(err));
