"use strict";
var colors = [];
var colorSquaresAmount = 6;
var gameOver = false;
var translations = {easy: "EASY", hard: "HARD"};
var winningColor;

var colorSquares = document.querySelectorAll("td");
var notify = document.querySelector("#notify");
var resetBtn = document.querySelector("#reset-btn");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	var modeButtons = document.querySelectorAll(".mode");
	for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === translations.easy ? colorSquaresAmount = 3: colorSquaresAmount = 6;
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
						var hasWinningColorBackground = document.querySelectorAll(".winning-color");
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
	var codeDisplay = document.querySelector("#color-code");
	var topRibbon = document.querySelector("h1");

	colors = generateColorsArray(colorSquaresAmount);
	winningColor = getWinningColor();
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
	var rgb = [];
	for(var i = 0; i < 3; i++){
		rgb[i] = Math.floor(Math.random() * 256);
	}
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateColorsArray(num) {
	var colors = [];
	for (var i = 0; i < num; i++) {
		colors.push(createRandomColor());
	}
	return colors;
}

function getWinningColor() {
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}