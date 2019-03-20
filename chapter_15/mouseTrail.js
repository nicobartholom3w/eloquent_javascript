document.addEventListener("DOMContentLoaded", function(event){

	
	window.addEventListener("mousemove", event => {

		let dots = [];

		let n = document.createElement("div");
		n.className = "trail";
		document.body.appendChild(n);
		n.style.left = (event.pageX) + "px";
		n.style.top = (event.pageY) + "px";
		


	})

});