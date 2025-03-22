const sentenceElement =document.getElementById("sentence");
const inputbox =document.getElementById("input");
const restartbtn =document.getElementById("restart");
const timedis =document.getElementById("time");
const wpmdis =document.getElementById("wpm");
const accuracydis =document.getElementById("accu");
const progressbar =document.getElementById("progress");

let timeLeft =60;
let correctChars =0;
let totalchars =0;
let interval;
let started =false;

inputbox.addEventListener("input",function(){
    if(!started){
        started =true;
        interval =setInterval(updateTime,1000);
    }
Typing();
});

function Typing(){
    const typedText =inputbox.value;
    const origText =sentenceElement.innerText;

    totalchars = typedText.length;
    correctChars =0;

    for ( let i =0; i< totalchars;i++)
    {
        if(typedText[i] === origText[i])
        {
            correctChars++;
        }
    }

    let wpm =Math.round((correctChars/5)/
((60 - timeLeft )/60));

    let accuracy =totalchars > 0 ? Math.round((correctChars/totalchars)*100) : 100;

    wpmdis.innerText =wpm;
    accuracydis.innerText =accuracy + "%";
}

function updateTime()
{
    if(timeLeft > 0){
        timeLeft--;
        timedis.innerText =timeLeft + "s";
    }else{
        clearInterval(interval);
        inputbox.disabled =true;
    }
}

restartbtn.addEventListener("click",function(){
    clearInterval(interval);
    let timeLeft =60;
let correctChars =0;
let totalchars =0;
let started =false;
inputbox.value="";
inputbox.disabled =false;
timedis.innerText ="60s";
wpmdis.innerText ="00";
accuracydis.innerText ='100%';
})