 document.addEventListener("DOMContentLoaded", function(event){

 	let tabPanel = document.getElementsByClassName("tab-panel");
 	let buttonArray = [];
 	let divsArray = document.querySelectorAll("[data-tabname]");
 	let buttonName;
 	let button;


   function asTabs(node) {
	  	for(let div of divsArray){
	  		buttonName = div.getAttribute("data-tabname");
	  		button = document.createElement("button");
	  		button.innerHTML = buttonName;
	  		buttonArray.push(button);
		  	tabPanel[0].insertBefore(button, divsArray[0]);
	  	}	
	  	
    	for (let tab of buttonArray){
    		tab.style.cursor = "pointer";
    	}
    }
    	
    function selectTab(node) {
    	divsArray[1].style.display = "none";
    	divsArray[2].style.display = "none";
    	buttonArray[1].style.opacity = "0.25";
    	buttonArray[2].style.opacity = "0.25";

    	buttonArray[0].addEventListener("click", () => {
    		divsArray[0].style.display = "block";
    		divsArray[1].style.display = "none";
	    	divsArray[2].style.display = "none";
	    	buttonArray[0].style.opacity = "1";
	    	buttonArray[1].style.opacity = "0.25";
	    	buttonArray[2].style.opacity = "0.25";
    	});
    	buttonArray[1].addEventListener("click", () => {
    		divsArray[0].style.display = "none";
    		divsArray[1].style.display = "block";
	    	divsArray[2].style.display = "none";
	    	buttonArray[0].style.opacity = "0.25";
	    	buttonArray[1].style.opacity = "1";
	    	buttonArray[2].style.opacity = "0.25";
    	});
    	buttonArray[2].addEventListener("click", () => {
    		divsArray[0].style.display = "none";
    		divsArray[1].style.display = "none";
	    	divsArray[2].style.display = "block";
	    	buttonArray[0].style.opacity = "0.25";
	    	buttonArray[1].style.opacity = "0.25";
	    	buttonArray[2].style.opacity = "1";
    	});
    }

	


    asTabs(tabPanel[0]);
    selectTab(tabPanel[0]);


});