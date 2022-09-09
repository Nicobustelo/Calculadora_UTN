// conversion de hexadecimal a binario
// acepta integrales y string
// no funciona con numeros reales

const hexadecimalBinario = num => {
	numero = parseInt(num, 16).toString(2);
	return numero;
};

console.log(hexadecimalBinario('A'));
