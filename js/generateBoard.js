$(document).ready(function() {
  let a = 0;
  const board = _initBoard();
  let moves = 225;
  console.log(board);
  //generating board
  for(let i = 0; i < 6; i++) {
    $(".board").append('<div class="row row' + i + '"></div>');
    for (let j = 0; j < 6; j++) {
      $('.row' + i).append(`<div class="column ${i} ${j}"></div>`);
    }
  }
  $(".column").on('click', function(e) {
    const [,row,col] = $(this).attr('class').split(' ');
    console.log(row,col);
    if(a % 2 === 0) {
      $(this).css("background-color", "black");
      board[row][col] = 'black';
      if(checkWinner(board, moves, col, row, moves)){
        alert(checkWinner(board, moves, col, row, moves));
      }
      a = 1;
    } else {
      $(this).css("background-color", "green");
      board[row][col] = 'green';
      a = 0;
    }
    var styles = {
      width: "30px",
      height: "30px",
      margin: "0",
    };
    $(this).css( styles );
    $(this).unbind('click');
    console.log(board);
  });
});

function _initBoard(){
  const board = [];
  for(let i = 0;i<6;i++){
    board.push([]);
    for(let j = 0; j<6 ; j++)
      board[i].push('');
  }
  return board;
}

function checkWinner(board,color){

}