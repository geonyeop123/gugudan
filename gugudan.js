"use strict";
const startBtn = document.getElementById("startBtn");
const gameForm = document.querySelector(".js-gameForm");

let gameStart = false;
const HIDE_CN = "hide";

function handleShowGame() {
  if (gameStart) {
    startBtn.classList.add(HIDE_CN);
    gameForm.classList.remove(HIDE_CN);
  } else {
    startBtn.classList.remove(HIDE_CN);
    gameForm.classList.add(HIDE_CN);
  }
}

function timeHandler(ms) {
  for (let i = 0; i < ms; i++) {
    console.log("hi");
  }
}

function startTimer() {}

function handleClickSB() {
  gameStart = true;
  // handleShowGame();
  startTimer();
}

if (startBtn) {
  startBtn.addEventListener("click", handleClickSB);
}

setInterval(timeHandler(5), 1000);
