class Group {
	constructor(){
		// this.aGroup = {};
	}
	add(input){
		if(!(input in this)){
			this[input] = true;
		}
  	}

  	delete(input){
  		if(input in this){
  			delete this[input];
  		}
  	}

  	has(input){
  		return (input in this);
  	}

  	static from(array){
  		this.Group = new Group;
		for(let i = 0; i < array.length; i++){
			this.Group[array[i]] = true;
  		}
  		return this.Group;
  	}
}






let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false