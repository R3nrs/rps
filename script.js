var playerWin = 0;
var aiWin = 0;
var draws = 0;
var playerRoll; //rock = 1, paper = 2, scissors = 3
var gameMessage = $('#game-message');//Clean up the JS a lil
var scoreBoard = $('#scoreboard');


$('.rock').click(function() {
  playerRoll = 1;
  var computerRoll = Math.floor(Math.random() * 3 + 1);
  
  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose rock too!</p>').fadeIn(300);
      
      draws++;
      $('#draws').html('').append(draws);
    });
    
  } else if (playerRoll === 1 && computerRoll === 2) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose paper!</p>').fadeIn(300);
      
      aiWin++;
      $('#losses').html('').append(aiWin);
    });
    
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose scissors!</p>').fadeIn(300);
      
      playerWin++;
      $('#wins').html('').append(playerWin);
    });                
    
  }
  /*console.log("Player Rolled " + playerRoll);
  console.log("computer Rolled " + computerRoll);*/
});//end of rock click
