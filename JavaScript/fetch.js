const deathTxt=document.getElementById("htmldeathTitle")
let deathType= (number)=>{fetch("http://localhost:3000/badEnd")
.then (response=> response.json())
.then(response=> deathTxt.innerText= deathTxt.innerText+ " " +response[number].title)}

let answerTxt= (location, number)=>{fetch("http://localhost:3000/answers")
.then (response=> response.json())
.then(response=> location.innerText= response[number].answer)}

let flavorTxt= (flaLoc, number)=>{fetch("http://localhost:3000/questions")
.then (response=> response.json())
.then(response=> flaLoc.innerText= response[number].flavorText)}

let questionTxt= (queLoc, number)=>{fetch("http://localhost:3000/questions")
.then (response=> response.json())
.then(response=> queLoc.innerText= response[number].question)}
// let newQuote=[{type: "brown", size: "small"}, {type: "black", size: "large"}]
// fetch("http://localhost:3000/end", {
//   method: "POST",
//   headers: {
//     "Accept":"application/json",
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify(newQuote)
// })
// .then(resp => resp.json())
// .then(data=>console.log(data))