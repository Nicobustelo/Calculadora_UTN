// conversiones de binario a otras representaciones numericas
// solo acepta string
// no funciona con reales

const binarioDecimal = num => {
	numero = parseInt(num, 2).toString(10);
	return numero;
};

const binarioOctal = num => {
	numero = parseInt(num, 2).toString(8);
	return numero;
};

const binarioHexadesimal = num => {
	numero = parseInt(num, 2).toString(16).toUpperCase();
	return numero;
};

console.log(binarioDecimal('1000110'));
