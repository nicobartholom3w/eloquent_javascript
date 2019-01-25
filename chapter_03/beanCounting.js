// function countBs(string){
// 	let Bs = 0;
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === "B") {
// 			Bs++;
// 		}
// 	}
// 	return Bs;
// }

function countBs(string){
	return countChar(string, "B");
}

function countChar(string, letter){
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === letter) {
			count++;
		}
	}
	return count;

}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlakk", "k"));
// → 4