

function getAddressLine(inputStreetName) {
	let array = inputStreetName.split((?:\d+[a-z]*)$);
 let streetName = '';
	let houseNumber = '';
	let suffix = '';

	let seenNumber = false;

	for(let item of array) {
		if(!isNumeric(item) && !seenNumber) {
			streetName += item;
		}
		else if(isNumeric(item) && suffix === '') {
			houseNumber += item;
			seenNumber = true;
		}
		else if(seenNumber) {
			suffix += item;
		}
	}

  return {
		streetName,
		houseNumber,
		suffix
	};
	console.log(array);
}

function isNumeric(num){
	if(num === ' ') {
		return false;
	}

	if(num === '0') {
		return true;
	}

	return !isNaN(num);
}

let data = 'Sint Jorislaan 70 A';

getAddressLine(data);


