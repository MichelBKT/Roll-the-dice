// OK Definitions noms des joueurs clic start
// OK initialisation des scores à 0
// OK lancement de la partie clic play
// OK enregistrement score en cours
// OK current score à definir 
// OK affichage player en cours
// fin de partie à 100
// responsive design à revoir
// validation des données
// réglage de l'animation
//Règles :
//Le jeu comprend 2 joueurs sur un seul et même écran.
//Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
//Lors de son tour, le joueur peut décider à tout moment de: -Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors letour de l’autre joueur.-Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
//Le premier joueur qui atteint les 100 points sur global gagne le jeu.

const displayPlayer1 = document.getElementById("playerRound1")
const displayPlayer2 = document.getElementById("playerRound2")

const changePlayer1 = (playerRound1) => {
   if (playerRound1 === true){
      displayPlayer1.style.backgroundColor = "red"
      displayPlayer2.style.backgroundColor = ""
   } else if (playerRound1 === false){
      displayPlayer1.style.backgroundColor = ""
      displayPlayer2.style.backgroundColor = "red"
   }
}

const clicStart = () =>{
   let player1= prompt("Enter name Player 1").toUpperCase()
   let name1 = document.querySelector("#js-Player1")
   name1.innerHTML = player1
   let player2= prompt("Enter name player 2").toUpperCase()
   let name2 = document.querySelector("#js-Player2")
   name2.innerHTML = player2
   let scorePlayer1= 0
   let score1= document.querySelector("#scorePlayer1")
   score1.innerHTML = scorePlayer1
   current1.innerHTML = currentScore1
   let scorePlayer2= 0
   let score2= document.querySelector("#scorePlayer2")
   score2.innerHTML = scorePlayer2
   current2.innerHTML = currentScore2
   changePlayer1(playerRound1 = true)


}
const newParty = document.querySelector("#js-newGame")
newParty.addEventListener("click", clicStart)



const getRandomInt= (min, max) => {
   max = Math.ceil(max)
   min = Math.floor(min)
   return Math.floor(Math.random() * (max-min) + min)
 } 



let numbersRoundPlayer1 = []
let numbersRoundPlayer2 = []
let numberofDice = document.getElementById("#playButton")
const animation = document.querySelector(".cube")
anim = () =>{
   animation.style.animationDuration = "90ms"      
   
}


const sumPlayer1 = numbersRoundPlayer1.reduce((partialSum, a) => partialSum + a, 0)
const sumPlayer2 = numbersRoundPlayer2.reduce((partialSum, a) => partialSum + a, 0)


const clicPlay = () => {
   
   
   

   for(let winner=0; winner <= numberofDice; winner++){
      //anim()
      const face = document.querySelector("#dice1")
      let numbers = getRandomInt(1,7)

      if (numbers === 1 && playerRound1 === true){
         setTimeout(function(){animation.style.animation = "unset",1000})
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         scorePlayer1.innerHTML = 0
         numbersRoundPlayer1.splice(0)
         setTimeout(function(){animation.style.animation = "unset",1000})
         changePlayer1(playerRound1 = false)
         winner = 0

      } else if (numbers > 1 && playerRound1 === true){
         setTimeout(function(){animation.style.animation = "unset",1000})
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         const sumPlayer1 = numbersRoundPlayer1.reduce((partialSum, a) => partialSum + a, 0)
         console.log(numbersRoundPlayer1)
         console.log(sumPlayer1)
         numbersRoundPlayer1.push(numbers)
         scorePlayer1.innerHTML = sumPlayer1

         changePlayer1(playerRound1 = true)
         winner = currentScore1

      } else if (playerRound1 === false && numbers === 1){
         setTimeout(function(){animation.style.animation = "unset",1000})
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         scorePlayer2.innerHTML = 0
         numbersRoundPlayer2.splice(0)
         setTimeout(function(){animation.style.animation = "unset",1000})
         changePlayer1(playerRound1 = true)
         winner = 0

      } else if (playerRound1 === false && numbers > 1){
         setTimeout(function(){animation.style.animation = "unset",1000})
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         numbersRoundPlayer2.push(numbers)
         const sumPlayer2 = numbersRoundPlayer2.reduce((partialSum, a) => partialSum + a, 0)
         scorePlayer2.innerHTML = sumPlayer2
         console.log(numbersRoundPlayer2)
         console.log(sumPlayer2)
         setTimeout(function(){animation.style.animation = "unset",1000})
         changePlayer1(playerRound1 = false)
         winner = currentScore2
      }
      
   }
} 
const current1 = document.querySelector("#currentScore1")
const current2 = document.querySelector("#currentScore2")
let currentScore1 = 0
let currentScore2 = 0
function SumReducer(accumulator, currentvalue){
   return accumulator + currentvalue
}
const clichold = () => {
   if (playerRound1 === true) {
         numbersRoundPlayer1.push(currentScore1)
         currentScore1 = numbersRoundPlayer1.reduce((SumReducer))
         current1.innerHTML = currentScore1
         changePlayer1(playerRound1 = false)
         clicPlay()
         numbersRoundPlayer1.splice(0)
      }
   else if (playerRound1 === false) {
      numbersRoundPlayer2.push(currentScore2)
      currentScore2 = numbersRoundPlayer2.reduce((SumReducer))
      current2.innerHTML = currentScore2
      changePlayer1(playerRound1 = true)
      clicPlay()
      numbersRoundPlayer2.splice(0)
   }
}
const hold = document.querySelector("#holdButton")
hold.addEventListener("click", clichold)

const play = document.querySelector("#playButton")
play.addEventListener("click", clicPlay)
play.addEventListener("click", changePlayer1)

