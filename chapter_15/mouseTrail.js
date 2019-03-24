document.addEventListener("DOMContentLoaded", function(event){

	let dots = [];
	let n;

	let count = 0;
	window.addEventListener("mousemove", event => {	
		if (count >= 5){
			document.body.removeChild(dots[0]);
			dots.shift(dots[0]);
			dots[0].style.left = (event.pageX) + "px";
			dots[0].style.top = (event.pageY) + "px";
			count--;

		}
		else {
			n = document.createElement("div");
			n.className = "trail";
			dots.push(n);
			document.body.appendChild(dots[count]);
			dots[count].style.left = (event.pageX) + "px";
			dots[count].style.top = (event.pageY) + "px";
			count++;
		}
	})


});