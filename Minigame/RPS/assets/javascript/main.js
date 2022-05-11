const playerText = document.querySelector(".player");
const aiText = document.querySelector(".ai");
const resultText = document.querySelector(".result");
const button = document.querySelectorAll(".choice");
const textWin = document.querySelector(".win");
const textLose = document.querySelector(".lose");
const textDraw = document.querySelector(".draw");

const r = "Rock";
const p = "Paper";
const s = "Scissors";
const rWin = "Result: You win!";
const rLose = "Result: You lose!";
const rDraw = "Result: Draw!";

let player;
let ai;
let result;

button.forEach(value => value.addEventListener("click", () => {
	player = value.textContent;
	aiTurn();
	playerText.textContent = `Player: ${player}`;
	aiText.textContent = `AI: ${ai}`;
	resultText.textContent = checkWinner();
}));

function aiTurn() {
	var random = Math.floor(Math.random() * 3) + 1;
	switch(random) {
		case 1:
			ai = r;
			break;
		case 2:
			ai = p;
			break;
		case 3:
			ai = s;
			break;
	}
}
function checkWinner() {
	if(player == ai)
		return draw();
	else if(ai == r)
		return (player == p) ? win() : lose();
	else if(ai == p)
		return (player == s) ? win() : lose();
	else if(ai == s)
		return (player == r) ? win() : lose();
}

if(!localStorage.statsWin)
	localStorage.statsWin = 0;
if(!localStorage.statsLose)
	localStorage.statsLose = 0;
if(!localStorage.statsDraw)
	localStorage.statsDraw = 0;

function stats() {
	textWin.textContent = `Win: ${localStorage.statsWin}`;
	textLose.textContent = `Lose: ${localStorage.statsLose}`;
	textDraw.textContent = `Draw: ${localStorage.statsDraw}`;
}
function win() {
	localStorage.statsWin = Number(localStorage.statsWin) + 1;
	stats();
	return rWin;
}
function lose() {
	localStorage.statsLose = Number(localStorage.statsLose) + 1;
	stats();
	return rLose;
}
function draw() {
	localStorage.statsDraw = Number(localStorage.statsDraw) + 1;
	stats();
	return rDraw;
}
function reset() {
	localStorage.statsWin = 0;
	localStorage.statsLose = 0;
	localStorage.statsDraw = 0;
	stats();
}