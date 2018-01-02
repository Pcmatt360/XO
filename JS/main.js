var playerOne = '';
var playerTwo = '';
var totalScore;
var playerTurn = 'X';
var boxId;
var gameOver = false;
var winner = null;
var gameBoard = [
  null,null,null,
  null,null,null,
  null,null,null,
]

$('#start').click(function() {
  $(this).text( "Next Step..." );
})

function isWinner(){
  if (gameBoard[0]) {
    if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]){
      return playerTurn;
    }
    else if (gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]){
      return playerTurn;
    }
    else if (gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]){
      return playerTurn;
    }
  }
  if (gameBoard[4]) {
    if (gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]){
      return playerTurn;
    }
    else if (gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]){
      return playerTurn;
    }
  }
  if (gameBoard[2]) {
    if (gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]){
      return playerTurn;
    }
    else if (gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]){
      return playerTurn;
    }
  }
  if (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8] && gameBoard[6]){
    return playerTurn;
  }
  return null;
}

function isGameOver(){
  if (winner) {
    $('.modal-title').text(winner + ' Has Won');
    $('#mContent').addClass(winner);
    $('#myModal').modal('show');
  }
  else {
    gameOver = true;
    gameBoard.forEach(function(value) {
      if (!value){
        gameOver = false;
      }
    });
    if (gameOver) {
      console.log('Winter has come :-(');
      $('.modal-title').text('Winter Has Come');
      $('#mContent').addClass('Winter');
      $('#myModal').modal('show');
    }
    else {
      console.log('No one wins the game of thrones YET!');
    }
  }
}

function swapPlayerTurn(){
  if (playerTurn == 'X') {
    playerTurn = 'O';
  }
  else {
    playerTurn = 'X';
  }
}

changeImage= (currentBox) =>{
  if(playerTurn == 'X'){
    currentBox.addClass('Xbox');
    // currentBox.html('<img src = "Assets/de.png" />');
  }
  else if (playerTurn == 'O'){
    currentBox.addClass('Obox');
  }
  
};

const resetGame = () => {
  gameBoard.forEach(function(element,index) {
    gameBoard[index] = null;
  });
  $('.box').removeClass("Xbox Obox");
  console.log(gameBoard);
} 

const getNames = () => {
  playerOne = prompt("Player One please enter your name: ");
  playerOne = playerOne + ' Lannister';
  console.log(playerOne);
  $('#playerOne').text(playerOne);
  playerTwo = prompt("Player Two please enter your name: ");
  playerTwo = playerTwo + ' Targaryen';
  console.log(playerTwo);
  $('#playerTwo').text(playerTwo);

};

$('#start').click(function(){
  getNames();
})

$('#reset').click(function(){
  resetGame();
})

$('.box').click(function() {
  console.log('box click');
  
  // $(this).addClass('btn btn-primary');
  //$(this).text(playerTurn);
  boxId = $(this).attr('id');
  console.log(boxId);
  gameBoard[boxId] = playerTurn;
  console.log(gameBoard);
  changeImage($(this));
  winner = isWinner();

  isGameOver();
  swapPlayerTurn();
  

} )


