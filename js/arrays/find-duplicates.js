const inputData = [1, 2, 2, 3 ,4 ,4 ];

function filterDuplicates(input) {
	let map = {};

	for(let item of input) {
		if(!map[item]) {
			map[item] = item;
		}
	}

	return Object.keys(map);
}

let result = filterDuplicates(inputData);