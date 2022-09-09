// automatizacion para exceso de bits

// bits = cantidad de bits en el resultado
// num = numero que se desea obtener
// exceso = exceso que se desea usar
const exceso = (num, exceso, bits = -1) => {
	if (num >= 0) {
		let resultado = [num, (num + exceso).toString(2)];
		// añade la cantidad de ceros necesarios al principio del numero
		if (resultado.length < bits) {
			let resultado2 = `${resultado[1]}`.split('');
			for (let i = 0; i < bits - resultado.length; i++) {
				resultado2.unshift('0');
			}
			resultado2 = resultado2.join('');
			return [`decimal: ${resultado[0]}`, `binario: ${resultado2}`];
		}
		return [`decimal: ${num}`, `binario: ${(num + exceso).toString(2)}`];
	} else {
		return 'Not currently working on negative numbers';
	}
};

console.log(exceso(0, 3, 7));
