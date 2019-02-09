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






let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group);
group.delete(10);
console.log(group);
console.log(group.has(10));
// → false