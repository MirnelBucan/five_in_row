$(document).ready(function() {
  let a = 0;
  const board = _initBoard();
  let moves = 225;
  console.log(board);
  //generating board
  for (let i = 0; i < 6; i++) {
    $(".board").append('<div class="row row' + i + '"></div>');
    for (let j = 0; j < 6; j++) {
      $('.row' + i).append(`<div class="column ${i} ${j}"></div>`);
    }
  }
  $(".column").on('click', function(e) {
    const [, row, col] = $(this).attr('class').split(' ');
    console.log(row, col);
    if (a % 2 === 0) {
      $(this).css("background-color", "black");
      board[row][col] = 'black';
      if (checkWinner(board, moves, col, row, moves)) {
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
    $(this).css(styles);
    $(this).unbind('click');
    console.log(board);
  });
});

function _initBoard() {
  const board = [];
  for (let i = 0; i < 6; i++) {
    board.push([]);
    for (let j = 0; j < 6; j++)
      board[i].push('');
  }
  return board;
}
//Rastavit sutra sve casove
function checkWinner(board, color) {
  for(let i = 0; i < 15; i++)
    for(let j = 0; j<15;j++){
      if(j<4){
        if(checkVertical(board,color,i,j))
          return true;
        if(checkHorizontal(board, color, i, j))
          return true;
      }
    }
}

function checkVertical(board, color, row,col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row+i][col] === color){
      counter++;
    }
  }
  if(counter === 5)
    return true;
  return false;
}

function checkHorizontal(board, color, row,col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row][col+i] === color){
      counter++;
    }
  }
  if(counter === 5)
    return true;
  return false;
}

function checkDiagRight(board, color, row,col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row+i][col+i] === color){
      counter++;
    }
  }
  if(counter === 5)
    return true;
  return false;
}

function checkDiagRight(board, color, row,col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row+i][col-i] === color){
      counter++;
    }
  }
  if(counter === 5)
    return true;
  return false;
}