// OK Definitions noms des joueurs clic start
// OK initialisation des scores à 0
// OK lancement de la partie clic play
// OK enregistrement score en cours
// current score à definir 
// fin de partie à 100
// réglage de l'animation
//Règles :
//Le jeu comprend 2 joueurs sur un seul et même écran.
//Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
//Lors de son tour, le joueur peut décider à tout moment de: -Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors letour de l’autre joueur.-Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
//Le premier joueur qui atteint les 100 points sur global gagne le jeu.




const clicStart = () => {
   let namePlayer1= prompt("Enter name Player 1").toUpperCase()
   let name1 = document.querySelector("#js-Player1")
   name1.innerHTML = namePlayer1
   let namePlayer2= prompt("Enter name player 2").toUpperCase()
   let name2 = document.querySelector("#js-Player2")
   name2.innerHTML = namePlayer2
   let scorePlayer1= 0
   let score1= document.querySelector("#scorePlayer1")
   score1.innerHTML = scorePlayer1
   let currentScore1 = 0
   let current1 = document.querySelector("#currentScore1")
   current1.innerHTML = currentScore1
   let scorePlayer2= 0
   let score2= document.querySelector("#scorePlayer2")
   score2.innerHTML = scorePlayer2
   let currentScore2 = 0
   let current2 = document.querySelector("#currentScore2")
   current2.innerHTML = currentScore2
   }
const newParty = document.querySelector("#js-newGame")
newParty.addEventListener("click", clicStart)


const getRandomInt= (min, max) => {
   max = Math.ceil(max)
   min = Math.floor(min)
   return Math.floor(Math.random() * (max-min) + min)
 } 
let player1 = true
let numbersRoundPlayer1 = []
let numbersRoundPlayer2 = []
let numberofDice = document.getElementById("#playButton")



const clicPlay = () => {
   const animation = document.querySelector(".cube")
   const face = document.querySelector("#dice1")
   const anim = () =>{
      animation.style.animationDuration = "90ms"      
      setTimeout(function(){animation.style.animation = "unset",1000})
   }

   for (let i = 0 ; i <= numberofDice; i++){
 
      let numbers = getRandomInt(1,7)
      if (numbers === 1 && player1 === true){
         anim()
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         scorePlayer1.innerHTML = 0
         numbersRoundPlayer1.splice(0)
         player1 = false
        
      } else if (numbers > 1 && player1 === true){
         anim()
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         const sumPlayer1 = numbersRoundPlayer1.reduce((partialSum, a) => partialSum + a, 0) 
         console.log(numbersRoundPlayer1)
         console.log(sumPlayer1)
         numbersRoundPlayer1.push(numbers)
         scorePlayer1.innerHTML = sumPlayer1
         player1 = true
      } else if (player1 === false && numbers === 1){
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         scorePlayer2.innerHTML = 0
         numbersRoundPlayer2.splice(0)
         player1 = true
      } else if (player1 === false && numbers > 1){
         face.setAttribute("src", "./image/dés face " + numbers + ".jpg")
         const sumPlayer2 = numbersRoundPlayer2.reduce((partialSum, a) => partialSum + a, 0)
         numbersRoundPlayer2.push(numbers)
         scorePlayer2.innerHTML = sumPlayer2
         console.log(numbersRoundPlayer2)
         console.log(sumPlayer2)
         player1 = false
      }
   }
} 





const play = document.querySelector("#playButton")
play.addEventListener("click", clicPlay)


