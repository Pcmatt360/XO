var playerOne = '';
var playerTwo = '';
var totalScore;
var playerTurn = 'X';

function Score(){


}



$('.box').click(function() {
  console.log('box click');
  $(this).addClass('Xbox');
  $(this).text(playerTurn);
  if (playerTurn == 'X') {
    playerTurn = 'O';

  } else {
    playerTurn = 'X';
  }

} )

