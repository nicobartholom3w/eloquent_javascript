 document.addEventListener("DOMContentLoaded", function(event){

 	let tabPanel = document.getElementsByClassName("tab-panel");
 	let buttonArray = [];
 	let divsArray = document.querySelectorAll("[data-tabname]");
 	let buttonName;
	let count;	

   function asTabs(node) {
      // Your code here.

	  	for(let div of divsArray){
	  		buttonName = div.getAttribute("data-tabname");
	  		let button = document.createElement("button");
	  		button.innerHTML = buttonName;
	  		buttonArray.push(button);
	  	
	  		// if (buttonName == "one"){
		  		tabPanel[0].insertBefore(button, divsArray[0]);
		  		count = 0;
	  		// }
	  		// else {
	  		// 	tabPanel[0].insertBefore(button, );
	  		// 	count++;
	  		// }
	  	}
		
    }
    	
    function selectTab(node) {


    }	


    asTabs(tabPanel[0]);
    selectTab(tabPanel[0]);


});