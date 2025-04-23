let gameseq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // console.log("key pressed");
    if(started===false) {
        console.log("Game Started");
        started=true;
        levelUp();
    }

});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
     userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(randomBtn);
}
function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx]===gameseq[idx]) {
    //     console.log("same value");
        if(userSeq.length==gameseq.length) {
           setTimeout (levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! your score is <b>${level}<b> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white";
        },250)
        reset();
    }

}
function btnPress(){
 //   console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset() {
    started=false;
    userSeq=[];
    gameseq=[];
    level=0;
}