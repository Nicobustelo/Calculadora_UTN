// automatizador codigo de johnson

// numBits = numero de bits que va a tener el codigo
// decimal = decimal que se quiere saber
const johnson = (numBits, decimal = -1) => {
	// crea el codigo de jhonson
	let arrayJohnson = [];
	for (let i = 0; i < numBits; i++) {
		let array = [];
		for (let j = 0; j < numBits - i; j++) {
			array.push(0);
		}
		for (let j = 0; j < i; j++) {
			array.push(1);
		}
		array = array.join('');
		arrayJohnson.push(array);
	}
	for (let i = 0; i < numBits; i++) {
		let array = [];
		for (let j = 0; j < numBits - i; j++) {
			array.push(1);
		}
		for (let j = 0; j < i; j++) {
			array.push(0);
		}
		array = array.join('');
		arrayJohnson.push(array);
	}
	// devuelve el decimal que se busca
	if (decimal !== -1) {
		return arrayJohnson[decimal];
	}
	return arrayJohnson;
};

console.log(johnson(30));
