var numSquares = 9;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var body = document.querySelector("body");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var ultimateBtn = document.querySelector("#ultimateBtn");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){

	easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected"); 
	hardBtn.classList.remove("selected");
	ultimateBtn.classList.remove("selected");
	numSquares = 3;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i <= square.length; i++){
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		} else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
});

	hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected"); 
	easyBtn.classList.remove("selected");
	ultimateBtn.classList.remove("selected");
	numSquares = 6;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i <= square.length; i++){
		if(colors[i]){
			square[i].style.backgroundColor = colors[i]; 
			square[i].style.display = "block";
		}else{
			square[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
});

	ultimateBtn.addEventListener("click", function(){
		ultimateBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		easyBtn.classList.remove("selected");
		numSquares = 9;

		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		for(var i = 0; i < square.length; i++){
			square[i].style.backgroundColor = colors[i];
			square[i].style.display = "block";
		}

		h1.style.backgroundColor = "steelblue";

	});

}

function setupSquares(){
	colorDisplay.textContent = pickedColor;

	for(i = 0; i < square.length; i++){
	//add initial colors to squares
	square[i].style.backgroundColor = colors[i];

	// if(colors[i]){
	// 		square[i].style.backgroundColor = colors[i];
	// 	}else{
	// 		square[i].style.display = "none";
	// }

	//add click listeners to each squares
	square[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare clicked color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

}

function reset(){
		resetButton.addEventListener("click", function(){

		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

		messageDisplay.textContent = "";
		resetButton.textContent = "New Colors";

		for(var i = 0; i < square.length; i++){
			square[i].style.backgroundColor = colors[i];
		}
			h1.style.backgroundColor = "steelblue";

	});
}

function changeColors(color){
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b +")";

}
