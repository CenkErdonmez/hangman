const randomWords=document.querySelector(".head")
const button=document.querySelector(".inputs")
const result=document.querySelector(".result")
const newButton=document.querySelector(".newGame")
const head=document.querySelector("#head")
const body=document.querySelector("#body")
const leftarm=document.querySelector("#leftarm")
const rightarm=document.querySelector("#rightarm")
const leftfood=document.querySelector("#leftfood")
const rightfood=document.querySelector("#rightfood")
const newGameButton=document.getElementById("newGameButton")


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
    btn.style.width="300px"
    btn.style.width="200px"
    btn.style.margin="10px"
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
console.log(newArr)
const inputs=document.querySelectorAll("button")  

let guesses = 0 
let maxGuesses = 6 

inputs.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const letter = e.target.value.toUpperCase()
    const spans = document.querySelectorAll("span")
    let found = false

    newArr.forEach((char, index) => {
      if (char.toUpperCase() === letter) {
        spans[index].textContent = letter
        found = true
      }
   
    });

    if (!found) {
      guesses++
      hangMan(guesses)
    }

    if (guesses >= maxGuesses) {
      result.textContent = `Game over! The word was ${newWord}.`
      button.style.display = "none"
      newButton.style.display = "block"
      newGameButton.style.display=""
    }
    let isComplete = true;
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent === "___") {
        isComplete = false
        break
      }
    }

    if (isComplete) {
      result.textContent = `Congratulations! You guessed the word ${newWord}.`
      button.style.display = "none"
      newButton.style.display = "block"
      newGameButton.style.display=""
    }
  
   
  })
})

function hangMan(guesses) {
  switch (guesses) {
    case 1:
      head.style.visibility=""
      break
    case 2:
      body.style.visibility=""
      break
    case 3:
      leftarm.style.visibility=""
      break
    case 4:
      rightarm.style.visibility=""
      break
    case 5:
      leftfood.style.visibility=""
      break
    case 6:
      rightfood.style.visibility=""
      break
  }
}

function reloadPage() {
  location.reload()
}
newGameButton.addEventListener("click",()=>{
  reloadPage()
})




