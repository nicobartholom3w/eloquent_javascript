function loop (num, test, update, console) {
	let n = num;
	console(n);
	for (let i = 1; i < num; i++){
		if(test){
			n = update(n);
			console(n);
		}
	}
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1