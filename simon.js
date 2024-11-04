let gameSeq = [];
let userSeq = [];
let color = ["green", "red", "yellow", "purple"];
let started = false;
let level = 0;
let highScore=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `LEVEL ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = color[randIdx];
    gameSeq.push(randColor);
    console.log(`game seq: ${gameSeq}`);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        if(highScore<level-1){
            highScore=level-1;
        }
        h2.innerText = `Game Over! Your score was ${level-1}\n Highest Score ${highScore}\npress any key to start again.`
        // let body=document.querySelector("body");
        // body.style.backgroundColor="r
        gameOver();
        reset();
    }
}

    function btnPress() {
        let btn = this;
        btnFlash(btn);

        let userColor = btn.getAttribute("id");
        // console.log(userColor);
        userSeq.push(userColor);
        console.log(`user seq: ${userSeq}`);
        checkAns(userSeq.length - 1);
    }

    let btns = document.querySelectorAll(".btn");
    for (btn of btns) {
        btn.addEventListener("click", btnPress);
    }

    function reset(){
        started=false;
        gameSeq=[];
        level=0;
    }
    function gameOver(){
        let body=document.querySelector("body");
        body.classList.add("blinkRed");
        setTimeout(function(){
            body.classList.remove("blinkRed");
        },250);
    }