// Your code here (and the code from the previous exercise)
class Group {
	constructor(){
		this.anArray = [];
	}
	add(input){
		// if(!(input in this)){
		// 	this[input] = true;
		// }
		if(!(this.anArray.includes(input))){
			this.anArray.push(input);
		}
  	}

  	delete(input){
  		// if(input in this){
  		// 	delete this[input];
  		// }
  		if(this.anArray.includes(input)){
  			this.anArray = this.anArray.filter(output => output !== input);
  		}
  	}

  	has(input){
  		// return (input in this);
  		return this.anArray.includes(input);
  	}

  	static from(array){
  		this.anArray = new Group;
		for(let i = 0; i < array.length; i++){
			// this.Group[array[i]] = true;
			this.anArray.add(array[i]);
  		}
  		return this.anArray;
  	}
}


class GroupIterator {
	constructor(group){
		this.group = group;
		this.i = 0;
		this.array = this.group.anArray;
	}
	next(){
		let value = this.array[this.i];
		this.i++;
		let answer = (this.i <= this.array.length);
		return {value: value, done: !answer};
	}
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

// const Symbol = {
// 	iterator: '@@iterator'
// }

// Group.prototype['@@iterator'] = function() {

// }

// let group = Group.from(["a", "b", "c"]);
// console.log(group);
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
// const group = Group.from(["a", "b", "c"]);

// for(let value = group.next(); value !== undefined; value = group.next()) {
// 	console.log(value);
// }

// function Group(group) {
// 	this.group = group;
// }

// Group.prototype.next = function() {
// 	return this.group;
// }


