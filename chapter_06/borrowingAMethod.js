let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
// 
// var animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Fail' }
// ];

// for (var i = 0; i < animals.length; i++) {
//   (function(i) {
//     animals[i].print = function() {
//       console.log('#' + i + ' ' + animals[i].species
//                   + ': ' + animals[i].name);
//     }
//     animals[i].print();
//   }).call(animals[i], i);
// }

// var blah = {};
// var blee = {};
// blee.direction = "right";
// blah.direction = "left";

// blah.func = function(num, num2) {
// 	console.log(this.direction);
// 	console.log(num);
// 	console.log(num2);
// }

// // (function(){
// // 	console.log(this.direction);
// // }).call({direction: 'left'});

// blah.func.call(blee,5, 10);

// function stuff(num1, num2, num3, num4) {
// 	console.log('boopy doo');
// }

// stuff(1,2,3,4);


