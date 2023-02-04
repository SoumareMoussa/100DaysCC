let playerScore =0;
let compScore = 0;
let roundWiner = "";
let playerChoice ='';

let resultsBox = document.querySelector('.results_box');
let computerChoice = document.querySelector('.computer_choice');
let playResults = document.querySelector('.player_score');
let computerResults = document.querySelector('.computer_score');
let notifEnd = document.querySelector('.game_over');



 function playRound(playerSelection,computerSelection) {
    
    console.log("call playround "+ playerSelection, computerSelection);
    if (playerSelection == computerSelection) {
       resultsBox.innerText = "Tie";
    
      } 
     else if ((playerSelection =="paper" && computerSelection=="rock") ||
      (playerSelection=="rock" && computerSelection=="scissors") ||
      (playerSelection=="scissors" && computerSelection=="paper") ||
      (playerSelection=="rock" && computerSelection=="paper"))
      {
        resultsBox.innerText = "Player wins!" + playerSelection + " beats " + computerSelection; 
          playerScore++; 
          playResults.innerText = "Player Score : " + playerScore;
           
          if (playerScore==5)
           {
            notifEnd.innerText = "Game over, Player has won";
            
           } 

         
      }
    
      else if ((computerSelection=="scissors" && playerSelection=="paper") ||
      (computerSelection=="rock" && playerSelection=="scissors")||
      (computerSelection=="scissors" && playerSelection=="paper") ||
      (computerSelection=="paper" && playerSelection=="rock"))
      {
        resultsBox.innerText="Computer wins! " + computerSelection + " beats " + playerSelection; 
          compScore++; 

          computerResults.innerText = "Computers score : "+ compScore;
         
          if (compScore==5)
           {
            notifEnd = "Game over, The computer has won";
           // document.querySelector('button').disabled = true;
           } 
      }
 }

function getComputerchoice() {

    let words = ["rock","paper","scissors"];
    let randomItem = words[Math.floor(Math.random() * words.length)];
    
    return randomItem.toLowerCase();


 }

   

 

    const  player_btns = document.querySelectorAll('button');

    player_btns.forEach((button) => {
          button.addEventListener('click', () => {
  
              playerChoice = button.innerText.toLowerCase();

              
          //    console.log("player sel is " +  playerChoice);
          
          //  console.log("computer choice is " + computerSelection.toLowerCase())
          const computerSelection = getComputerchoice();


           playRound(playerChoice,computerSelection);
           computerChoice.innerText = computerSelection;
          
            
  
           })
  
       });

     


