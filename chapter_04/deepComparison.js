function deepEqual (a, b){
	if (a === null || b === null){
		return false;
	}
	if (typeof(a) !== typeof(b)){
		return false;
	}
	if (typeof(a) === "object"){
		if (Array.isArray(a) && Array.isArray(b)){
			if (a.length !== b.length){
				return false;
			}
			for (let i = 0; i < a.length; i++){
				if (!deepEqual(a[i], b[i])){
					return false;
				}
			}
			return true;
		}
		else if (!Array.isArray(a) && !Array.isArray(b)){
			let arrayA = Object.keys(a);
			let arrayB = Object.keys(b);
			if (arrayA.length !== arrayB.length){
				return false;
			}
			for (let j = 0; j < arrayA.length; j++){
				if(!deepEqual(a[arrayA[j]], b[arrayB[j]])){
					return false;
				}
			}
			return true;
			
		}
		else {
			return false;
		}
	}
	else {
		return (a === b);
	}
	

}
let obj = {here: {is: "an"}, object: 2};

// a = {here: {is: "an"}, object: 2}; b = {here: {is: "an"}, object: 2};

// console.log(deepEqual(null, obj))
console.log(deepEqual([1, 2, {"B": 7}, 3], [1, 2, {"B": 7}, 3]));

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

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
// if (a === null || b === null){
	// 	return false;
	// }
	// let arrayA = Object.keys(a);
	// let arrayB = Object.keys(b);
	// if (arrayA.length !== arrayB.length){
	// 	return false;
	// }
	// // if ()
	// for (let i = 0; i < arrayA.length; i++){
	// 	if (typeof(arrayA[i]) !== typeof(arrayB[i]) && arrayA[i] !== null && arrayB[i] !== null){
	// 		return false;
	// 	}
	// 	if (arrayA[i] !== arrayB[i]){
	// 		return false;
	// 	}
	// 	// else {
	// 	// 	for (let j = 0; j < )
	// 	// }
	// }
	// return true;