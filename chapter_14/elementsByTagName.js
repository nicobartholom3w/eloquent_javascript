 document.addEventListener("DOMContentLoaded", function(event){

 function byTagName(node, tagName) {
    // Your code here.
    let childElements = [];
    let nodeList = node.childNodes;
    for(let tag of nodeList){
      if(tag.hasChildNodes()){
        let childList = tag.childNodes;
        for(let child of childList){
          child = child.nodeName.toLowerCase();
          if(child == tagName){
             childElements.push(child);
          }
        }
      }
      tag = tag.nodeName.toLowerCase();
    	if (tag == tagName){
    	  childElements.push(tag);
      }
    }
    return childElements;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
});