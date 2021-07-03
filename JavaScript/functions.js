function continuer(cont, qF){
    cont.addEventListener("click", ()=>{
        cont.style.display="none";
        progress++, init();
        qA(qF)
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
        dis.style.display="block";
    })
}
