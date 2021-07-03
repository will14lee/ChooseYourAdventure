let instantDead= document.getElementsByClassName("deathBtn")
const gameOverTxts= document.getElementsByClassName("deaths")
const choiceBtns= document.getElementsByClassName("choiceBtns")
const choice1P= document.getElementById("choice1")
const choice2P= document.getElementById("choice2")
const choice3P= document.getElementById("choice3")
const choice4P= document.getElementById("choice4")
const gameOver= document.getElementById("gameOver")
const restart= document.getElementById("restart")
const btnName= document.getElementById("btnName")
const inName= document.getElementById("inName")

const toShow=()=>{
        btnName.style.display= "block";
        inName.style.display= "block";
        read.style.display="block"
}
const toHide=()=>{
        readSmile.style.display="none"
        readSmirk.style.display="none"
        first.style.display="none"
        p1.style.display= "none"
        p2.style.display="none"
        p3.style.display="none"
        p4.style.display="none"
        firstChoices.style.display= "none"
        secondChoices.style.display= "none"
        thirdChoices.style.display= "none"
        fourthChoices.style.display= "none"
        gameOver.style.display= "none"
        restart.style.display= "none"
        ending.style.display="none"
        p2.innerText=""
        p3.innerText=""
        p4.innerText=""
        flavor2.innerText=""
        flavor3.innerText=""
        flavor4.innerText=""
}

function deadDetails(dTi){
    this.deathTitle= dTi;
}