var numSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetColors = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


game();


resetColors.addEventListener("click" , function(){
	reset();
});


function game(){
	modeBTN();
	for(var i = 0 ; i < squares.length ; i++){
		//adding a click event
		squares[i].addEventListener("click" , function(){
		//saving the clicked square
		var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "CORRECT";
				resetColors.textContent = "Play Again?";
				changeColors(clickedColor);
				//changing the color of h1 to the picked color
				h1.style.backgroundColor = clickedColor;
			}
			else{
				//changing the clicked square to the background color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}

function modeBTN(){
	//mode easy or hard
	for(var i = 0 ; i < modeButtons.length ; i++){
		modeButtons[i].addEventListener("click" , function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function reset(){
	messageDisplay.textContent = "";
	resetColors.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	//generete all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
}
function changeColors(color){
	//changing all the colors to the picked color
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	//picking a random color from the array of colors
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	//add num random colors to arr
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//creating a random color
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
