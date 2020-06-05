//Hackerrank question

function repeatedString(inputString, multiplier) {
	let counter = 0;
	for(let item of inputString) {
		if(item === 'a') {
			counter = counter + 1;
		}
	}

	let diveder = Math.floor(multiplier / inputString.length);
	let reminder = multiplier % inputString.length;
	
	counter = diveder * counter;

	for(let i = 0; i < reminder; i++) {
		if(inputString[i] === 'a') {
			counter = counter + 1;
		}
	}

	return counter;
}

let inputData = 'gfcaaaecbg';
let multiplier = 547602;

repeatedString(inputData, multiplier);