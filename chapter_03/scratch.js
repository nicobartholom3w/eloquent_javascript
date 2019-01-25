// function multiplier(factor) {
//   return number => number * factor;
// }

// let twice = multiplier(2);
// console.log(multiplier(3));
// console.log(twice(5));
// → 10
// 
// 
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)