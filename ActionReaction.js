let gameSeq=[];
let userSeq=[];
let btns=["red","green","blue","yellow"];

let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("gave is started....");
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },1000);
}

function levelup(){
    level++;
    userSeq=[];
    h3.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcol=btns[randidx];
    let randbtn=document.querySelector(`.${randcol}`);
    // console.log(randidx);
    // console.log(randcol);
    // console.log(randbtn);
    gameSeq.push(randcol);
    console.log(gameSeq);
    btnflash(randbtn);
}
function checkans(idx){
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML=`oops... Game Over. your score is <b> ${level} <b><br><br>
         please try again to press any key`;
        document.querySelector("body").style.backgroundImage="url('bg.jpg')";
        setTimeout(function(){
            document.querySelector("body").style.backgroundImage="url('space.jpg')";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log("button was pressed")
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);

    checkans(userSeq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}