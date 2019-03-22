document.addEventListener("DOMContentLoaded", function(event){

	let dots = [];
	let n;

	for (let i = 0; i < 5; i++){
		n = document.createElement("div");
		n.className = "trail";
		dots.push(n);
	}
	
	window.addEventListener("mousemove", event => {	
	// 		document.body.appendChild(dots[count]);
	// 		dots[count].style.left = (event.pageX) + "px";
	// 		dots[count].style.top = (event.pageY) + "px";
	// 		count++;
	// 		dots.push(dots.shift(dots[count]));
	// })
	let count = 0;
		
		while (count < 5) {
			document.body.appendChild(dots[count]);
			dots[count].style.left = (event.pageX) + "px";
			dots[count].style.top = (event.pageY) + "px";
			count++;
		}
			dots.push(dots.shift(dots[count]));
	})
});