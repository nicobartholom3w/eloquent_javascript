// Initial solution


let max = 100;

for (let num = 0; num <= max; num++) {
	if (((num % 3) == 0) && ((num % 5) == 0)){
		console.log("FizzBuzz");
	}
	else if ((num % 3) == 0) {
		console.log("Fizz");
	}
	else if ((num % 5) == 0) {
		console.log("Buzz");
	}
	else {
		console.log(num);
	}
}

// trying to figure out "clever" solution from hints

// let max = 100;
// let fizz = "Fizz";
// let buzz = "Buzz";


// for (let num = 0; num <= max; num++) {
// 	// let fizzbuzz = (((num % 3) == 0) && ((num % 5) == 0)) ? "FizzBuzz" : num;
// 	// if ((num % 3) == 0){
// 	// 	fizzbuzz = "Fizz";
// 	// }
// 	// console.log(fizzbuzz);

// 	// if ((num % 3) == 0) {
// 	// 	console.log(fizz);
// 	// }
// 	if ((num % 3) == 0) {
// 		fizzbuzz = "Fizz";
// 		if ((num % 5) == 0) {
// 			fizzbuzz = "FizzBuzz";
// 		}
// 	}
// 	else if ((num % 5) == 0) {
// 		fizzbuzz = "Buzz";
// 	}
// 	else {
// 		fizzbuzz = num;
// 	}

// 	console.log(fizzbuzz);
// }
// 


// book solution

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}