"use strict";
const startBtn = document.getElementById("startBtn");
const gameForm = document.querySelector(".js-gameForm");
const timerText = document.querySelector(".js-timer");

let gameStart = false;
const HIDE_CN = "hide";
let timer = 0;

function delayGame(second) {
  timer = second * 1000;
  setInterval(handleTimer, 1000, second);
}

function handleTimer(second) {
  timerText.innerText = `00:${second}`;
  second--;
}

function handleClickSB() {
  gameForm.classList.remove(HIDE_CN);
  delayGame(3);
}

if (startBtn) {
  startBtn.addEventListener("click", handleClickSB);
}
