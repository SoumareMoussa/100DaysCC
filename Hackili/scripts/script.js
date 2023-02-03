console.log("calling Js Script");

/*let randomNumber = parseInt(prompt (" ", "Provide a random number"));
 for (let i=1; i<=randomNumber; i++)
 {
    
    if (i % 3==0 && i % 5 ==0) {
        console.log ("Fizzbuzz");
    }
   else if (i % 3 ==0)
    {
        console.log ("Fizz");
    }
    else if (i % 5 == 0)
    {
        console.log ("Buzz");
    }
    else 
    {
        console.log(i);
    }
 }*/


 let playerScore =0;
let compScore = 0;
let roundWiner ="";


function getChoice () {

    let words = ["rock","paper","scissors"];
    let randomItem = words[Math.floor(Math.random() * words.length)];
    return randomItem.toLowerCase();


 }


 let playRound = function(playerSelection,computerSelection) {
    
 
  console.log("computer choice is " + computerSelection + " and playerSelection is " + playerSelection);

  if (playerSelection==computerSelection) {
    console.log("Tie");

  } 
  else if ((playerSelection=="paper" && computerSelection=="rock") ||
  (playerSelection=="rock" && computerSelection=="scissors") ||
  (playerSelection=="scissors" && computerSelection=="paper"))
  {
        console.log("You win!" + playerSelection + " beats " + computerSelection); 
        playerScore++; 
    }

    else if ((computerSelection=="scissors" && playerSelection=="paper") ||
    (computerSelection=="rock" && playerSelection=="scissors")||
    (computerSelection=="scissors" && playerSelection=="paper"))
    {
        console.log("You win! " + computerSelection + " beats " + playerSelection); 
        compScore++; 
    }
    

 }

 const computerSelection = getChoice();
 const playerSelection = getChoice();
 

 let game = function() {
    for (i=0; i<5; i++) {
        playRound(playerSelection,computerSelection);
    }
    console.log ("Player Score is " + playerScore);
    console.log("Computer Score is " + compScore);
 }



game();

 let repeatString = function(string,num) {
    let result ="";
    for (let i=0;i < num; i++) {
       result += " " + string;
    }

    return result;
 }

 str_repeat = repeatString("word",5);
 console.log(str_repeat);


 function reverseString(str) {
    console.log(str.length);
    let strArray = [];
    for (y=0;y<str.length;y++) {
        strArray[y] = str[y];
    }
   console.log(strArray.reverse());
 }

 reverseString("hello world");

  function removefromAray(anArray,valueToremove) {
    let newArray = [];
    for(y=0;y<anArray.length;y++) {
        if (anArray[y] != valueToremove)
        {
            newArray.push(anArray[y]);
        }
    }
    console.log(newArray);
}
removefromAray ([1,2,3,4,5],2);

 let sumAll = function(depart,lastN) {
     let total = 0;
    for (i=depart;i<=lastN;i++)
    {
        total += i;
    }
    console.log(total);
 }
 sumAll(2,6);


 // dom manipulation
  const container = document.querySelector('#container');
 console.log("container is " + container);
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent ="This is inserted from JS";

  container.appendChild(content);

  const parag = document.createElement('p');
  parag.classList.add('paragraph');
  parag.textContent ="Awesome Paragraph";
  
  const newDiv = document.createElement('div');
  newDiv.classList.add("newDiv");
  newDiv.appendChild(parag);
  
  container.appendChild(newDiv);


/*  const btn = document.querySelector("#btn");
 // btn.addEventListener('click', () => { alert('Clicked') });
btn.addEventListener('click', function(e) {
    e.target.style.background ='blue';
}) */

const btns = document.querySelectorAll('button');
 
btns.forEach((button) => {
    button.addEventListener('click', () => { alert(button.id) });
 });
