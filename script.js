const fromText = document.querySelector('.from-text'),
	toText = document.querySelector('.to-text'),
	exchageIcon = document.querySelector('.exchange'),
	selectTag = document.querySelectorAll('select'),
	icons = document.querySelectorAll('.row i'),
	translateBtn = document.querySelector('button');

// crea la lista para elegir la base numerica
selectTag.forEach((tag, id) => {
	console.log('hello');
	for (let country_code in countries) {
		let selected =
			id == 0
				? country_code == 'en-GB'
					? 'selected'
					: ''
				: country_code == 'hi-IN'
				? 'selected'
				: '';
		let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
		tag.insertAdjacentHTML('beforeend', option);
	}
});

// intercambia las bases numericas
exchageIcon.addEventListener('click', () => {
	let tempText = fromText.value,
		tempLang = selectTag[0].value;
	fromText.value = toText.value;
	toText.value = tempText;
	selectTag[0].value = selectTag[1].value;
	selectTag[1].value = tempLang;
});

// agarra el texto que se va escribiendo
fromText.addEventListener('keyup', () => {
	if (!fromText.value) {
		toText.value = '';
	}
});

// // require funciones
// import { decimalBinario } from './Arquitectura/conversiones/decimal';
// import { octalBinario } from './Arquitectura/conversiones/octal';
// import { hexadecimalBinario } from './Arquitectura/conversiones/hexadecimal';
// import {
// 	binarioDecimal,
// 	binarioOctal,
// 	binarioHexadecimal,
// } from './Arquitectura/conversiones/binario';
// const { decimalBinario } = require('./Arquitectura/conversiones/decimal');
// const { octalBinario } = require('./Arquitectura/conversiones/octal');
// const {
// 	hexadecimalBinario,
// } = require('./Arquitectura/conversiones/hexadecimal');
// const {
// 	binarioDecimal,
// 	binarioHexadecimal,
// 	binarioOctal,
// } = require('./Arquitectura/conversiones/binario');

// traduce el numero
translateBtn.addEventListener('click', () => {
	console.log('hello');
	let text = fromText.value.trim(),
		translateFrom = selectTag[0].value,
		translateTo = selectTag[1].value;
	if (!text) return;
	toText.setAttribute('placeholder', 'Traduciendo...');

	const traductor = () => {
		switch (translateFrom) {
			case 'hi-IN':
				toText.value = text;
				break;
			case 'en-GB':
				toText.value = decimalBinario(text);
				break;
			case 'es-ES':
				toText.value = octalBinario(text);
				break;
			case 'hr-HR':
				toText.value = hexadecimalBinario(text);
				break;
			default:
				return;
		}
	};

	const traductorA = () => {
		switch (translateTo) {
			case 'hi-IN':
				toText.value = toText.value;
				break;
			case 'en-GB':
				toText.value = binarioDecimal(toText.value);
				break;
			case 'es-ES':
				toText.value = binarioOctal(toText.value);
				break;
			case 'hr-HR':
				toText.value = binarioHexadecimal(toText.value);
				break;
			default:
				return;
		}
	};

	traductor();
	traductorA();
});

// copia el texto en tu portapapeles
icons.forEach(icon => {
	icon.addEventListener('click', ({ target }) => {
		if (!fromText.value || !toText.value) return;
		if (target.classList.contains('fa-copy')) {
			if (target.id == 'from') {
				navigator.clipboard.writeText(fromText.value);
			} else {
				navigator.clipboard.writeText(toText.value);
			}
		} else {
			let utterance;
			if (target.id == 'from') {
				utterance = new SpeechSynthesisUtterance(fromText.value);
				utterance.lang = selectTag[0].value;
			} else {
				utterance = new SpeechSynthesisUtterance(toText.value);
				utterance.lang = selectTag[1].value;
			}
			speechSynthesis.speak(utterance);
		}
	});
});
