// requiere los cifrados utilizados en la UTN
const {
	cifradoUTN_minuscula_entero,
	cifradoUTN_mayuscula_entero,
	cifradoUTN_minuscula_w,
	cifradoUTN_mayuscula_w,
	cifradoUTN_minuscula_ñ,
	cifradoUTN_mayuscula_ñ,
} = require('./cifrados.js');

// automatizacion para cifrado de texto
const codificar = (texto, clave, cifradoElegido = -1) => {
	// reemplaza espacios por el signo "+"
	let textoPlano = texto.split(' ').join('+');

	// valida que el texto sean solo letras o espacios
	const regex = /^[a-zA-Z+ñ]+$/;
	if (regex.test(textoPlano) !== true) {
		return 'texto no valido';
	}

	// separa todos los caracteres distintos
	let contador = {};
	let caracteresTexto = textoPlano.split('');
	let caracteresClave = clave.split('');
	caracteresTexto.map(elem => (contador[elem] = contador[elem] + 1 || 1));
	caracteresClave.map(elem => (contador[elem] = contador[elem] + 1 || 1));

	// asigna un numero a cada caracter, creando uno nuevo con los caracteres usados o con un cifrado ya existente
	let cifrado = {};
	if (cifradoElegido === -1) {
		let k = 0;
		for (let x in contador) {
			cifrado[x] = k;
			k = k + 1;
		}
	}
	// el cifrado ya existente todavia no funciona
	else {
		cifrado = cifradoElegido;
	}

	// convierte los caracteres del texto y la clave en sus respectivos numeros
	let textoNumeros = caracteresTexto.map(elem => cifrado[elem]);
	let claveNumeros = caracteresClave.map(elem => cifrado[elem]);

	// suma los digitos del texto con los de la clave
	let numerosCodificados = [];
	let j = 0;
	let l = 0;
	for (let æ in cifrado) {
		l = l + 1;
	}
	for (let i = 0; i < textoNumeros.length; i++) {
		if (j > claveNumeros.length - 1) {
			j = j - claveNumeros.length;
		}
		let num = textoNumeros[i] + claveNumeros[j];
		if (num > l) {
			num = num - l;
		}
		numerosCodificados.push([num]);
	}

	// crea un objecto que tenga los caracteres como valor para cada numero
	let numeros = {};
	for (let p in cifrado) {
		numeros[cifrado[p]] = p;
	}

	// cambia los numeros por letras
	let textoCodificado = numerosCodificados.map(elem => numeros[elem]).join('');

	return textoCodificado;
};

console.log(codificar('UNIVERSIDAD TECNOLOGICA NACIONAL', 'ESTUDIAR'));
