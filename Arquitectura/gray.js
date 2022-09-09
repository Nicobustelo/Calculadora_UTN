// automatizador codigo de gray

// numBits = numero de bits que va a tener el codigo
// decimal = numero que se quiere saber
const gray = (numBits, decimal = -1) => {
	// crea el codigo de gray
	let arrayGray = ['0', '1'];
	for (let i = 1; i < numBits; i++) {
		for (let j = arrayGray.length - 1; j >= 0; j--) {
			arrayGray.push(arrayGray[j]);
		}
		for (let k = 0; k < arrayGray.length / 2; k++) {
			arrayGray[k] = '0' + arrayGray[k];
		}
		for (let l = arrayGray.length / 2; l < arrayGray.length; l++) {
			arrayGray[l] = '1' + arrayGray[l];
		}
	}
	// devuelve el decimal que se busca
	if (decimal !== -1) {
		return arrayGray[decimal];
	}
	return arrayGray;
};
console.log(gray(6, 63));
