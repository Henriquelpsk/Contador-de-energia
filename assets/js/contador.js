const secao = document.querySelector(".section");
const plusOne = document.querySelector(".plusOne");
const plusTwo = document.querySelector(".plusTwo");
const plusThree = document.querySelector(".plusThree");
const plusFour = document.querySelector(".plusFour");
const minusOne = document.querySelector(".minusOne");
const minusTwo = document.querySelector(".minusTwo");
const minusThree = document.querySelector(".minusThree");
const minusFour = document.querySelector(".minusFour");
const start = document.querySelector(".start");
const clear = document.querySelector(".clear");
const turn = document.querySelector(".turn");
const visor = document.querySelector(".visorTexto")
const visorNow = document.querySelector(".energyNow")
let resultado = 0;

start.addEventListener('click', function (valor){
		const startFunction = (valor = 0) + 3;
		resultado = startFunction;
		visorNow.innerHTML = resultado;
		visor.innerHTML = ` +${resultado}`;
	});

clear.addEventListener('click', function (valor){
	const cleatFunction = 0;
	resultado = cleatFunction;
	visorNow.innerHTML = resultado;
	visor.innerHTML = ``;
});

turn.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor + 2;
	resultado = turnFunction + resultado;
	if (resultado > 10) {
		resultado = 10
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` +${turnFunction}`;
});

plusOne.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor + 1;
	resultado = turnFunction + resultado;
	if (resultado > 10) {
		resultado = 10
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` +${turnFunction}`;
});

plusTwo.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor + 2;
	resultado = turnFunction + resultado;
	if (resultado > 10) {
		resultado = 10
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` +${turnFunction}`;
});

plusThree.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor + 3;
	resultado = turnFunction + resultado;
	if (resultado > 10) {
		resultado = 10
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` +${turnFunction}`;
});

plusFour.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor + 4;
	resultado = turnFunction + resultado;
	if (resultado > 10) {
		resultado = 10
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` +${turnFunction}`;
});

minusOne.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor - 1;
	resultado = turnFunction + resultado;
	if (resultado < 0) {
		resultado = 0
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` ${turnFunction}`;
});

minusTwo.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor - 2;
	resultado = turnFunction + resultado;
	if (resultado < 0) {
		resultado = 0
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` ${turnFunction}`;
});

minusThree.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor - 3;
	resultado = turnFunction + resultado;
	if (resultado < 0) {
		resultado = 0
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` ${turnFunction}`;
});

minusFour.addEventListener('click', function (valor){
	valor = 0;
	const turnFunction = valor - 4;
	resultado = turnFunction + resultado;
	if (resultado < 0) {
		resultado = 0
	}
	visorNow.innerHTML = resultado;
	visor.innerHTML += ` ${turnFunction}`;
});