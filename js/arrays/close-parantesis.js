let inputdStr = "(())";


function isParentisClosed(input) {
	if(!input) return;

	const arrayResult = input.split("");
	let counter = 0;

	for(let item of arrayResult) {
		if(item === "(") {
			counter += 1;
		}
		else {
			counter -=1;
		}
	}

	if(counter === 0) {
		return true;
	}

	return false;
}

isParentisClosed(inputdStr);