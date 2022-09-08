// automatizacion para codigo bcd

const bcdNatural = elem => {
	const object = {
		0: '0000',
		1: '0001',
		2: '0010',
		3: '0011',
		4: '0100',
		5: '0101',
		6: '0110',
		7: '0111',
		8: '1000',
		9: '1001',
	};
	return object[elem];
};

const bcdAiken = elem => {
	const object = {
		0: '0000',
		1: '0001',
		2: '0010',
		3: '0011',
		4: '0100',
		5: '1011',
		6: '1100',
		7: '1101',
		8: '1110',
		9: '1111',
	};
	return object[elem];
};

const bcd = (num, tipo) => {
	let array = num.toString().split('');
	if (tipo === 'natural') {
		array = array.map(elem => bcdNatural(elem));
	} else if (tipo === 'aiken') {
		array = array.map(elem => bcdAiken(elem));
	}
	return array;
};

console.log(bcd(436, 'aiken'));
