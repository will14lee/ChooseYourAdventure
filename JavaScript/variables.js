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
let tbody=document.querySelector("tbody")
let restarts=0

const tableDisplay=()=>{
        if(restarts===0){deathTable.style.display="none"
console.log("Hello!")}
        else if(restarts===1){deathTable.style.display="block"
console.log("Goodbye!")}
}
let tds=0;
let wheretd=0;

const createTrTd= ()=>{
        tds++
        wheretd++
        let addTr=tbody.appendChild(document.createElement("tr"))
        let addTd=addTr.appendChild(document.createElement("td"))
        addTd.setAttribute("id", tds)
        namePutter();
        tds++
        let addTd1=addTr.appendChild(document.createElement("td"))
        addTd1.setAttribute("id", tds)
        addTd1.innerHTML="???"
}
const namePutter=()=>{
        document.getElementById(1+((wheretd-1)*2)).innerHTML=namesForTable(wheretd-1);
        console.log(document.getElementById(1+((wheretd-1)*2)))
        console.log(wheretd)
        console.log(namesForTable(wheretd-1))
}

const toShow=()=>{
        btnName.style.display= "block";
        inName.style.display= "block";
        read.style.display="block"
        tableDisplay()
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