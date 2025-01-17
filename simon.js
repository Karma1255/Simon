let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let userColor;
let score = [];

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let btns = ["red", "green", "orange", "purple"];

document.addEventListener("keypress", function () {
    console.log("Game is started");
    if (started == false) {
        started = true;
        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(index) {

    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);

        }

    }
    else {
        score.push(level - 1);
        h3.innerHTML = `High Score : <b>${Math.max(...score)}</b>`;
        h2.innerHTML = `Game Over!  Your score is <b>${level-1}</b>. <br> Press any key to restart.`;   
        let body = document.querySelector("body");
        body.classList.add("red");
        setTimeout(function () {
            body.classList.remove("red");
        }, 100);
        started = false;
        level = 0;
        gameSeq = [];
    }
}

function levelUp() {
    level++;
    userSeq = [];
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
