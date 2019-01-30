let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// let reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
// console.log(arrays.reduce());
// 
// 
console.log(arrays.reduce((flat, current) => flat.concat(current)));

// → [1, 2, 3, 4, 5, 6]