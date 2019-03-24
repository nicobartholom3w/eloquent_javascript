document.addEventListener("DOMContentLoaded", function(event){

	let dots = [];
	let n;

	for (let i = 0; i < 5; i++){
		n = document.createElement("div");
		n.className = "trail";
		dots.push(n);
	}
	let count = 0;
	window.addEventListener("mousemove", event => {	
		document.body.appendChild(dots[count]);
		dots[count].style.left = (event.pageX) + "px";
		dots[count].style.top = (event.pageY) + "px";
		count++;
		if (count > 5){
			// let r = dots.shift(dots[0]);
			// dots.push(r);
			dots[0].style.left = (event.pageX) + "px";
			dots[0].style.top = (event.pageY) + "px";
		}
	})


});