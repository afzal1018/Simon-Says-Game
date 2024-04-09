let gameSeq = [];
let userSeq = [];

let btns = ["Y", "R", "P", "G" ];

let started = false;
let level = 0;
let highScr = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started")

        started = true;
        levelUp();
        h2.style.backgroundColor = "";
    }
})

function levelUp() {
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`;

    let rndidx = Math.floor(Math.random() * 3);
    let rndColor = btns[rndidx];
    let rndBtn = document.querySelector(`.${rndColor}`);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    gameFlash(rndBtn);
    hScore();
}

function hScore() {
    if (level>highScr) {
        highScr++
    }
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
            h2.style.backgroundColor = "#90D26D";
        }
    }else {
        h2.innerText = `Game Over! Try again. Your Score ${level} (Highest Sroce is ${highScr})` ;
        h2.style.backgroundColor = "#FF204E";
        reset();
    }
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    },200 );
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function() {
    btn.classList.remove("userflash");
    },50 );
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userClr = this.getAttribute("id");
    userSeq.push(userClr);

    checkAns(userSeq.length-1);
    
}

let allBtn = document.querySelectorAll(".btn"); 

for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];


    
}