document.addEventListener("DOMContentLoaded", function(event){

	
	window.addEventListener("mousemove", event => {

		let dots = [];


		for(let i = 0; i < 10; i++){
			let n = document.createElement("div");
			n.className = "trail";
			document.body.appendChild(n);
			n.style.left = (event.pageX) + "px";
			n.style.top = (event.pageY) + "px";
			dots.push(n);
		}

		for (let j = 10; i > 0; i--){
			dots.pop(n);
		}
		


	})

});