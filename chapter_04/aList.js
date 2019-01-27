function arrayToList (array) {
	let listTop;
	let current;
	for (let i = 0; i < array.length; i++){
		if (!listTop){
			current = {value: array[i], next: null};
			listTop = current;
		}
		else {
			current.next = {value: array[i], next: null};
			current = current.next;
		}
	}
	return listTop;
}

function listToArray (list) {
	let current = list;
	let array = [];
	while (1 == 1){
		if (current.next == null){
			array.push(current.value);
			return array;
		}
		else {
			array.push(current.value);
			current = current.next;
		}
	}
}

function prepend (value, next){
	let list = {value: value, next: next};
	return list;
}


function nth(list, position) {

	let current = list;
	for (let i = 0; i < position; i++){
		current = current.next;
	}
	if (current == null || current == undefined){
		return undefined;
	}
	return current.value;
}


function nthRecursive (list, position){
	let count = 0;
	let current = list;
	if (count == position){
		return current.value;
	}
	else if (current == null || current == undefined){
		return undefined;
	}
	else {
		current = current.next;
		return nthRecursive(current, position - 1);
	}
}


console.log(arrayToList([10, 20]));
// // → {value: 10, next: {value: 20, next: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, next: {value: 20, next: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
// 
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 	for (let i = 0; i < array.length; i++) {
	// 	if (current.value !== 0){
	// 		current.next = list;
	// 		cur
	// 	}
	// 	current.value = array[i];
	// 	current.next = list;
	// 	current = current.next;
	// 	// list = list.next;
	// 	if (array[i + 1] == undefined){
	// 		current.next = null;
	// 	}
	// }

	// return current;
	// 
	// 
	// 
	// // function arrayToList (array) {
	// let listTop;
	// let current;
	// for (let i = 0; i < array.length; i++){
	// 	if (!listTop){
	// 		current = {value: array[i], next: null};
	// 		listTop = current;
	// 	}
	// 	else {
	// 		current.next = {value: array[i], next: null};
	// 		current = current.next;
	// 	}

	// 	// listTop = current;
	// 	// listTop.value = array[i];
	// 	// listTop.next = {value: null, next: {}};
	// 	// listNext = listTop.next;
	// }
	// return listTop;