const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, multiplicar, listar) => {
	try {
		let salida,
			consola = '';
		for (let i = 1; i <= multiplicar; i++) {
			salida += `${base} por ${i} = ${base * i} \n `;
			consola += `${base} por ${i} ${colors.red('=')} ${base * i} \n `;
		}

		if (listar) {
			console.clear();
			console.log('======================='.green);
			console.log(`Tabla del ${colors.bold(base)}`);
			console.log('======================='.green);

			console.log(consola);
		}

		fs.writeFileSync(`./files/Tabladel${base}.txt`, salida);

		return `Tabla del ${base}.txt`;
	} catch (err) {
		console.log(err);
	}
};

module.exports = crearArchivo;
