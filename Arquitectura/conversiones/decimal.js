// conversion de decimal a binario
// acepta integrales y string
// no funciona con numeros reales

const decimalBinario = num => {
	numero = parseInt(num, 10).toString(2);
	return numero;
};

console.log(decimalBinario(10));
