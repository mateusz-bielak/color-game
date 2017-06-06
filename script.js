var colorSquaresAmount = 6;
var colors = generateColorsArray(colorSquaresAmount);
var winningColor = drawWinningColor();
var gameOver = false;

var codeDisplay = document.querySelector("#colorCode");
codeDisplay.textContent = winningColor;

var topRibbon = document.querySelector("h1");
var colorSquares = document.querySelectorAll("td");
var hasWinningColorBackground = document.querySelectorAll(".winningColor");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var notify = document.querySelector("#notify");
var resetBtn = document.querySelector("#resetBtn");

for(var i = 0; i < colorSquares.length; i++) {
	colorSquares[i].style.backgroundColor = colors[i];
	colorSquaresListener();
}

function colorSquaresListener() {
	colorSquares[i].addEventListener("click", function() {
		if(!gameOver) {
			if(this.style.backgroundColor === winningColor){
				notify.textContent = "Correct!";
				gameOver = true;
				resetBtn.textContent = "PLAY AGAIN?";
				for(i = 0; i <= colorSquaresAmount; i++) {
					hasWinningColorBackground[i].style.backgroundColor = winningColor;
				}

			} else {
				this.style.backgroundColor = "rgb(25, 25, 25)";
				notify.textContent = "Try again";
			}
		}
	})
}

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	colorSquaresAmount = 3;
	colors = generateColorsArray(colorSquaresAmount);
	winningColor = drawWinningColor();
	codeDisplay.textContent = winningColor;
	topRibbon.style.backgroundColor = "steelblue";

	for(var i = 0; i < colorSquares.length; i++) {
		if(colors[i]) {
			colorSquares[i].style.backgroundColor = colors[i];
		} else {
			colorSquares[i].style.display = "none";
		}
	}

	gameOver = false;
	notify.textContent = "";

})

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	colorSquaresAmount = 6;
	colors = generateColorsArray(colorSquaresAmount);
	winningColor = drawWinningColor();
	codeDisplay.textContent = winningColor;
	topRibbon.style.backgroundColor = "steelblue";

	for(var i = 0; i < colorSquares.length; i++) {
		colorSquares[i].style.display = "table-cell";
		colorSquares[i].style.backgroundColor = colors[i];
	}

	gameOver = false;
	notify.textContent = "";
})

resetBtn.addEventListener("click", function() {
	colors = generateColorsArray(colorSquaresAmount);
	winningColor = drawWinningColor();
	codeDisplay.textContent = winningColor;
	topRibbon.style.backgroundColor = "steelblue";

	for(var i = 0; i < colorSquares.length; i++) {
		colorSquares[i].style.backgroundColor = colors[i];
	}

	gameOver = false;
	notify.textContent = "";
	resetBtn.textContent = "NEW COLORS";
})

function createRandomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return color;
}

function generateColorsArray(num) {
	var colors = [];
	for (var i = 0; i < num; i++) {
		colors.push(createRandomColor());
	}
	return colors;
}

function drawWinningColor() {
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}