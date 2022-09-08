// automatizador codigo de johnson

const johnson = (numBits, decimal = -1) => {
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
	if (decimal !== -1) {
		return arrayJohnson[decimal];
	}
	return arrayJohnson;
};

console.log(johnson(12));
