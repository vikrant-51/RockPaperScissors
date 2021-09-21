"use strict";

let scoreWin = 0;
let scoreLose = 0;
let scoreCard = 0;
function computerPlay() {
  var arr = ["Rock", "Paper", "Scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}
function game() {

  function playRound() {
      let playerSelection = "Rock";
  let computerSelection = computerPlay();
    console.log("Comp:-  " + computerSelection);
    console.log("User:-  " + playerSelection);
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") ||(playerSelection === "Scissors" && computerSelection === "Paper")){console.log("Win");
        return "Win";}
        
    else if (playerSelection === computerSelection) {console.log("Draw");
        return "Draw";}
        
    else {console.log("Lose");
        return "Lose";}
        
  }
  for( var n = 1; n <=5 ; n++){
      let result = playRound();
      if(result === "Win")
          scoreWin++;
      else if(result === "Lose")
          if(scoreLose >= 0)
              scoreLose++;
      else{
          scoreLose+=0;
          scoreWin+=0;
      }
  }
//    scoreCard = scoreWin - scoreLose;
//    console.log("Win:- "+scoreWin);
//    console.log("Lose:- " + scoreLose);
    if(scoreWin > scoreLose){
         scoreCard = scoreWin - scoreLose;
        console.log("You Win By " + scoreCard + " Points!" );
    }
    else if (scoreWin === scoreLose)
        console.log("It is a Draw!");
    else{
        scoreCard = scoreLose - scoreWin;
        console.log("You Lose By " + scoreCard + " Points!" );
    }
}

game();