function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]
// 
// 
// 
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// console.log(characterScript(121));
// → {name: "Latin", …}




function dominantDirection(text) {
  // Your code here.
  let languageArray = [];
  for(let i = 0; i < text.length; i++){
  	languageArray.push(characterScript(text.charCodeAt(i)));
  }
  let directionArray = [];
  for(let object of languageArray){
  	if (object !== null){
  		directionArray.push(object.direction);
  	}
  }
  let d = function(direction) {
  	if(direction == "rtl")return "rtl"; 
  	else return "ltr";
  }
  let directionOccurs = countBy(directionArray, d);
  let ltrCount;
  let rtlCount;
  for (let j = 0; j < directionOccurs.length; j++){
  		if (directionOccurs[j].name == "ltr"){
  			ltrCount = directionOccurs[j].count;
  		}
  		else if (directionOccurs[j].name == "rtl"){
  			rtlCount = directionOccurs[j].count;
  		}
  			
	}
	// if (ltrCount == undefined && rtlCount == undefined){
	// 	return "none";
	// }
	if (ltrCount == undefined || rtlCount == undefined){
		if (ltrCount == undefined){
			ltrCount = 0;
		}
		if (rtlCount == undefined){
			rtlCount = 0;
		}
	}
	if (ltrCount > rtlCount) return "ltr";
	else return "rtl";

}


// directionOccurs = [{name: "ltr", count: 5},{name: "rtl", count: 1}];
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl