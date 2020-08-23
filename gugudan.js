"use strict";
const startBtn = document.getElementById("startBtn");
const gameForm = document.querySelector(".js-gameForm");

let gameStart = false;
const HIDE_CN = "hide";

function handleStart() {
  if (gameStart) {
    startBtn.classList.add(HIDE_CN);
    gameForm.classList.remove(HIDE_CN);
  } else {
    startBtn.classList.remove(HIDE_CN);
    gameForm.classList.add(HIDE_CN);
  }
}

function handleClickSB() {
  gameStart = true;
  handleStart();
}

if (startBtn) {
  startBtn.addEventListener("click", handleClickSB);
}
