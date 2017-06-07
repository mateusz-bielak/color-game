var colorSquaresAmount = 6;
var colors = [];
var winningColor;
var gameOver = false;

var codeDisplay = document.querySelector("#colorCode");
var topRibbon = document.querySelector("h1");
var colorSquares = document.querySelectorAll("td");
var hasWinningColorBackground = document.querySelectorAll(".winningColor");
var modeButtons = document.querySelectorAll(".mode");
var notify = document.querySelector("#notify");
var resetBtn = document.querySelector("#resetBtn");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? colorSquaresAmount = 3: colorSquaresAmount = 6;
			reset();
		})
	}
}

function setupSquares() {
	for(var i = 0; i < colorSquares.length; i++) {
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
}

function reset() {
	colors = generateColorsArray(colorSquaresAmount);
	winningColor = drawWinningColor();
	codeDisplay.textContent = winningColor;
	topRibbon.style.backgroundColor = "steelblue";
	gameOver = false;
	notify.textContent = "";
	resetBtn.textContent = "NEW COLORS";

	for(var i = 0; i < colorSquares.length; i++) {
		if(colors[i]) {
			colorSquares[i].style.display = "table-cell";
			colorSquares[i].style.backgroundColor = colors[i];
		} else {
			colorSquares[i].style.display = "none";
		}
	}
}

resetBtn.addEventListener("click", function() {
	reset();
})

function createRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
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