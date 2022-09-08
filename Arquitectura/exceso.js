// automatizacion para exceso de bits

// num = numero que se desea obtener
// exceso = exceso que se desea usar
const exceso = (num, exceso) => {
	if (num >= 0) {
		return [num, (num + exceso).toString(2)];
	} else {
		return 'Not currently working on negative numbers';
	}
};

console.log(exceso(0, 3));
