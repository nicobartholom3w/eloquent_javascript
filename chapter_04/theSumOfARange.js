// function range (start, end, input) {
// 	let array = [];

// 	if (start > end){
// 		let length = start - end;
// 		for (let i = 0; i <= length; i++) {
// 			array.push(start - i);
// 		}
// 	}
// 	let length = end - start;
// 	for (let i = 0; i <= length; i++) {
// 		array.push(start + i);
// 	}
// 	return array;
// }

function range (start, end, input) {
	let array = [];

	if (input !== undefined){
		let length = Math.abs(end - start);
		let i = 0;
		array.push(start);
		while (i < length){
			array.push(start += input);
			i++;
		}	
	}
	else if (start > end){
		let length = start - end;
		for (let i = 0; i <= length; i++) {
			array.push(start - i);
		}
	}
	else{
		let length = end - start;
		for (let i = 0; i <= length; i++) {
			array.push(start + i);
		}
	}
	return array;
}



function sum (array){
	let total = 0;
	for (item in array){
		total += array[item];
	}
	return total;
}






console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55