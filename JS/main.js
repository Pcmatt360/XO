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
    alert('The winner is ' + playerTurn);
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

$('.box').click(function() {
  console.log('box click');
  $(this).addClass('Xbox');
  $(this).text(playerTurn);
  boxId = $(this).attr('id');
  console.log(boxId);
  gameBoard[boxId] = playerTurn;
  console.log(gameBoard);
  winner = isWinner();

  isGameOver();
  swapPlayerTurn();
  

} )


