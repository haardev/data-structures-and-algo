// Psydo code
// Loop until the midle
// Swap the items

function reverArrayInPlace(listOfNumbers) {
	for (let i = 0; i < listOfNumbers.length / 2; i++) {
		const temp = listOfNumbers[i];
		const swapIndex = (listOfNumbers.length - 1 ) - i;

		listOfNumbers[i] = listOfNumbers[swapIndex];
		listOfNumbers[swapIndex] = temp;
	}

	return listOfNumbers;
}

let inputData = [1, 2, 3, 4, 5];
let numbers = 4

reverArrayInPlace(inputData, numbers);