var playerOne = '';
var playerTwo = '';
var totalScore;
var playerTurn = 'X';
var boxId;
var gameBoard = [
  null,null,null,
  null,null,null,
  null,null,null,
]

function isGameOver(){
 if (gameBoard[0] == gameBoard[1] && gameBoard[2]){
  alert('Player ' + playerTurn +' '+ 'Wins!')
  console.log('you win')
  }
  if (gameBoard[3] == gameBoard[4] && gameBoard[5]){
  console.log('you win')
  }
  if (gameBoard[6] == gameBoard[7] && gameBoard[8]){
  console.log('you win')
  }
  if (gameBoard[0] == gameBoard[3] && gameBoard[6]){
  console.log('you win')
  }
  if (gameBoard[2] == gameBoard[4] && gameBoard[7]){
  console.log('you win')
  }
  if (gameBoard[2] == gameBoard[4] && gameBoard[7]){
  console.log('you win')
  }
  if (gameBoard[0] == gameBoard[4] && gameBoard[8]){
  console.log('you win')
  //}if ((gameBoard[2] && gameBoard[4] && gameBoard[6]) =='X'){
  //  alert(playerTurn + 'Wins')
  //console.log('you win')
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
  if (playerTurn == 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
isGameOver();



} )

