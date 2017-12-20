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

function win(){


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


} )

