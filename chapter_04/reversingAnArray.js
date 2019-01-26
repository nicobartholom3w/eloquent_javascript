function reverseArray (array) {
	let newArray = [];
	for (let i = array.length - 1; i >= 0; i--){
		newArray.push(array[i]);
	}
	return newArray;
}


function reverseArrayInPlace (array){
	let halfLength = array.length / 2;

	for (let i = 0; i < halfLength; i++){
		let current = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = current;
	}

	return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]