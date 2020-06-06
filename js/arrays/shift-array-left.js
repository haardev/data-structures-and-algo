function shiftArrayLeft(listOfNumbers, rotations) {
	let index = 0;
	let rotatedIndex = rotations;
	const rotatedList = [];

	while(rotatedIndex < listOfNumbers.length) {
		rotatedList[index] = listOfNumbers[rotatedIndex];

		index = index + 1;
		rotatedIndex = rotatedIndex + 1;
	}

	rotatedIndex = 0;

	while(rotatedIndex < rotations) {
		rotatedList[index] = listOfNumbers[rotatedIndex];

		index = index + 1;
		rotatedIndex = rotatedIndex + 1;
	}

	return rotatedList;
}

let inputData = [1, 2, 3, 4, 5];
let numbers = 4

shiftArrayLeft(inputData, numbers);