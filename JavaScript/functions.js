function continuer(cont, qF, p, ans1, ans2, ans3, ans4){
    cont.addEventListener("click", ()=>{
        if(progress===1){
                // qA(qF, p)
                firstChoices.style.display= "none"
        }
        else if(progress===2){
                // qA1(qF, p)
                secondChoices.style.display= "none"
        }
        else if(progress===3){
                // qA2(qF, p)
                thirdChoices.style.display= "none"
                
        }
        else if(progress===4){
                fourthChoices.style.display= "none"
        }
                progress++, init();
                qA(qF, p, ans1, ans2, ans3, ans4)
    })
    }
function death(cont){
    for (item of cont) {
        item.addEventListener("click", ()=>{
            item.parentNode.style.display="none";
            progress=100;
            init();
        })
        }
    }
function deathHider(){
    for (item of gameOverTxts) {
        item.style.display= "none";
    }
}

function redo(cont){
    cont.addEventListener("click", ()=>{
        inName.value="";
        cont.style.display="none";
        progress=0;
        init();
    })
}
function youDied(where, how, dis){
    where.addEventListener("click", ()=>{
        // htmldeathTitle.innerText= htmldeathTitle.innerText + " " + new deadDetails(how).deathTitle;
        deathType(how)
        progress=100
        firstChoices.style.display= "none"
        secondChoices.style.display= "none"
        thirdChoices.style.display= "none"
        fourthChoices.style.display= "none"
        dis.style.display="block";
    })
}
