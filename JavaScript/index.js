let progress=0
const init=()=>{
    if(progress===0){
        deathHider();
        toShow();
        toHide();
        htmldeathTitle.innerText= "Game Over:"
        document.querySelector("cite.name").innerText=""

    }
    else if(progress===1){
        first.style.display="block"
        setTimeout(() => {
            read.style.display="none"
            readSmile.style.display="block"
            }, 2000);
        document.querySelectorAll("cite.name").forEach((string)=>{string.innerText=inName.value})      
        btnName.style.display= "none";
        inName.style.display= "none";
    }
    else if(progress===2){
        p1.style.display="block"
        firstChoices.style.display="block"
    }
    else if(progress===3){
        p2.style.display="block"
        firstChoices.style.display="none"
        secondChoices.style.display="block"
    }
    else if(progress===4){
        p3.style.display="block"
        secondChoices.style.display="none"
        thirdChoices.style.display="block"
    }
    else if(progress===5){
        p4.style.display="block"
        thirdChoices.style.display="none"
        fourthChoices.style.display="block"
    }
    else if(progress===6){
        fourthChoices.style.display="none"
        ending.style.display="block"
        restart.style.display="block"
    }
    else if(progress===100){
        gameOver.style.display="block"
        restart.style.display="block"
    }
}


btnName.addEventListener("click", (e)=>{
    if(inName.value===""){
        alert("Please input a name!")
    }
    else if(inName.value!==""){
        pBtn.style.display="block", progress++, init()
    }
        })

document.addEventListener("keydown", (e)=>{if(e.key==="Enter"){
    if(progress===1){
        pBtn.style.display="none"
        progress++, init()
    }
    else if(progress>=6){
        console.log("see me?")
        inName.value="";
        restart.style.display="none";
        progress=0;
        init();
    }
    else if(inName.value!=="" && progress===0){
        pBtn.style.display="block", progress++, init()
    }
    else if(progress===0){
        alert("Please input a name!")
    }
}
})
document.addEventListener("DOMContentLoaded", init)


continuer(pBtn);
const qA= (qF, p, ans1, ans2, ans3, ans4)=>{
    let an1= (qF*4)+0
    let an2=(qF*4)+1
    let an3=(qF*4)+2
    let an4=(qF*4)+3
    questionTxt(p, qF);
    flavorTxt(flavor2, qF);
    answerTxt(secondBtn,an1)
    answerTxt(thirdBtn,an2)
    answerTxt(death2,an3)
    answerTxt(death3,an4)
}
continuer(one1, 0, p2, secondBtn, thirdBtn, death2, death3)
continuer(one2,1, p2, secondBtn, thirdBtn, death2, death3)
continuer (one3, 2, p2, secondBtn, thirdBtn, death2, death3)
continuer(secondBtn, 3, p3, fourthBtn, death4, death5, death6)
continuer(thirdBtn, 4, p3, fourthBtn, death4, death5, death6)
continuer(fourthBtn, 5, p3, fourthBtn, death4, death5, death6)
continuer(fifthBtn, 6, p4, fifthBtn, death7, death8, death9)

death(instantDead);
redo(restart);

//swamp
youDied(death1, 0, swampDTx);
//wolf
youDied(death2, 1, wolfDTx);
//bees
youDied(death3, 2, beesDTx);
//bigger bees
youDied(death4, 3, biggerBeesDTx);
//gigantic bees
youDied(death5, 4, giganticBeesDTx);
//Oh no...
youDied(death6, 5, trumpInSkinTightClothingDTx);
//lemons
youDied(death7, 6, lemonsDTx);
//limes
youDied(death8, 7, limesDTx);
//orange
youDied(death9, 8, orangeDTx);