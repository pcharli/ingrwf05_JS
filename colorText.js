	/* myBlue = document.querySelector("#blue");
	myGreen = document.querySelector("#green");
	myRed = document.querySelector("#red");
	myTitle = document.querySelector("h1");

	myBlue.onclick = function() {
		myTitle.style.color = this.id;
	};
	myRed.onclick = function() {
		myTitle.style.color = "red";
	};
	myGreen.onclick = function() {
		myTitle.style.color = "green";
	};*/

	myDivs = document.querySelectorAll("header div");
	for (var i = 0; i < myDivs.length; i=i+1) {
		myDivs[i].addEventListener("click", function() {
			myColor = this.getAttribute("data-color");
			document.querySelector("h1").style.color = myColor;
		});
	};