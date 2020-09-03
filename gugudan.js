"use strict";
const startBtn = document.getElementById("startBtn");
const gameForm = document.querySelector(".js-gameForm");
const timerText = document.querySelector(".js-timer");
const problem = document.querySelector(".js-problem");

let gameStart = false;
const HIDE_CN = "hide";
let time = 0;
let timer;
let a = 3;
function handleTimer() {
  if (time > 0) {
    timerText.innerText = `00:0${time}`;
    time--;
  } else {
    timerText.innerText = `00:0${time}`;
    clearInterval(timer);
  }
}

function handleClickSB() {
  gameForm.classList.remove(HIDE_CN);
  timerText.innerText = "게임이 시작됩니다. 준비하세요!";
  time = 3;
  timer = setInterval(handleTimer, 1000);
}

if (startBtn) {
  startBtn.addEventListener("click", handleClickSB);
}
