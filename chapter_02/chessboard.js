// Initial solution

// let size = 10;

// let black = "#";
// let white = " ";
// let row = "";
// let board = "";

// for (let num = 1; num <= size; num++){

// 	if ((num % 2) !== 0) {
// 		row = (white + black).repeat(size / 2);
// 		board = row + "\n";
// 	}
// 	else {
// 		row = (black + white).repeat(size / 2);
// 		board = row + "\n";
// 	}

// 	console.log(board);
// }

// Second Solution

// let size = 8;
// let odd = " #";
// let even = "# ";
// let newLine = "\n";
// let board = "";


// for (let c = 1; c <= size; c++){

// 	for (let r = 1; r <= size/2; r++){
// 		if ((c % 2) !== 0) {
// 			board += odd;
// 		}

// 		else {
// 			board += even;
// 		}	
// 	}
// 	board += newLine;	
// }

// console.log(board);


// book solution
// 
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);