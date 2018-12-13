$(document).ready(function() {
  let a = 0;
  const board = _initBoard();
  console.log(board);
  //generating board
  for(let i = 1; i <= 15; i++) {
    $(".board").append('<div class="row row' + i + '"></div>');
    for (let j = 1; j <= 15; j++) {
      $('.row' + i).append(`<div class="column ${i} ${j}"></div>`);
    }
  }
  $(".column").on('click', function(e) {
    const [,col,row] = $(this).attr('class').split(' ');
    console.log(col,row);
    if(a % 2 === 0) {
      $(this).css("background-color", "black");
      a = 1;
    } else {
      $(this).css("background-color", "green");
      a = 0;
    }
    var styles = {
      width: "30px",
      height: "30px",
      margin: "0",
    };
    $(this).css( styles );
    $(this).unbind('click');
  });
});

function _initBoard(){
  const board = [];
  for(let i = 0;i<15;i++){
    board.push([]);
    for(let j = 0; j<15 ; j++)
      board[i].push("");
  }
  return board;
}



