// function every(array, test) {
//   // Your code here.
//   for(let item of array){
//   	if(!test(item)) return false;
//   }
//   return true;
  
// }

function every(array, test) {
	if (array.some(test)) {
		array.shift();
		every(array, test);
	} 
	if (array.length == 0){
		return true;
	}
	else return false;
}



// function every2(array, predicate) {
//   return !array.some(element => !predicate(element));
// }



console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true