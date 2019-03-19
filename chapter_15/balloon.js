 document.addEventListener("DOMContentLoaded", function(event){

	window.addEventListener("keydown", event => {
 		let currentFontSize;
 		let newFontSize;
 		if(event.key == "ArrowUp") {
 			let body = document.querySelector("body");
 			let style = window.getComputedStyle(body, null).getPropertyValue('font-size');
 			currentFontSize = parseFloat(style);
				newFontSize = currentFontSize + currentFontSize * 0.10;
				if (newFontSize > 240){
					document.body.innerHTML = document.body.innerHTML.replace("🎈", "💥" );
				}
 			document.body.style.fontSize = newFontSize + "px";
 		}
	});
	window.addEventListener("keydown", event => {
		let currentFontSize;
 		let newFontSize;
 		if(event.key == "ArrowDown") {
 			let body = document.querySelector("body");
 			let style = window.getComputedStyle(body, null).getPropertyValue('font-size');
 			currentFontSize = parseFloat(style);
			newFontSize = currentFontSize - currentFontSize * 0.10;
 			document.body.style.fontSize = newFontSize + "px";
 		}
 	});



});