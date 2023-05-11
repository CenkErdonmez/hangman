const randomWords=document.querySelector(".head")
const button=document.querySelector(".inputs")
const result=document.querySelector(".result")
const newButton=document.querySelector(".newGame")

let game=["MonsterInc","Pokemon","OnePiece"]

const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  
  alphabet.forEach((item)=>{
    const btn=document.createElement("button")
    button.appendChild(btn)
    btn.textContent=item
    btn.value=item
    btn.setAttribute("id",`${item}`)
  })
 
  

const newWord=game[Math.floor(Math.random() * game.length)]
let newArr=  newWord.split("")
newArr.map((item,index)=>{
    const  span=document.createElement("span")
    item="___"
    randomWords.appendChild(span)
    span.textContent=item
    span.classList=index
    span.style.padding="20px"
})

const inputs=document.querySelectorAll("button")  







//  randomWords.innerHTML=newWord
