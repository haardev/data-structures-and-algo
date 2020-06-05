function countingValleys(inputVally) {
	let valleyCounter = 0;
	let stepCounter = 0;
	let isInValley = false;

	for(let step of inputVally) {
		if(step === 'D') {
			stepCounter = stepCounter - 1;
		}
		else if(step === 'U') {
			stepCounter = stepCounter + 1;
		}

		if(stepCounter < 0) {
			isInValley = true;
		}

		if(stepCounter === 0 && isInValley) {
			valleyCounter = valleyCounter + 1;
			isInValley = false;
		}
	}
	
	return valleyCounter;
}

let inputData = 'UDDDUDUU';
countingValleys(inputData);