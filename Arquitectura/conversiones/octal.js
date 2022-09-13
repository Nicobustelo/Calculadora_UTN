// conversion de octal a binario
// acepta integrales y string
// no funciona con numeros reales

const octalBinario = num => {
	numero = parseInt(num, 8).toString(2);
	return numero;
};

console.log(octalBinario(10));

export { octalBinario };
// module.exports = { octalBinario };
