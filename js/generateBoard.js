$(document).ready(function() {
  let a = 0;
  const board = _initBoard();
  let moves = 225;
  const color=['green','black'];
  console.log(board);
  //generating board
  for (let i = 0; i < 15; i++) {
    $(".game").append('<div class="row row' + i + '"></div>');
    for (let j = 0; j < 15; j++) {
      $('.row' + i).append(`<div class="column ${i} ${j}"></div>`);
    }
  }
  $(".column").on('click', function(e) {
    const [, row, col] = $(this).attr('class').split(' ');
    console.log('Row,Col: ', row, col);
    moves--;
    if (a % 2 === 0) {
      $(this).css("background-color", "black");
      board[row][col] = 'black';
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
    console.log('Moves: ', moves);
    console.log(board);
    if (checkWinner(board, color[a])) {
       alert(`Winner is: ${color[a]}`);
     } else if (moves === 0) {
       alert('It\'s a draw');
     }
  });
});

function _initBoard() {
  const board = [];
  for (let i = 0; i < 15; i++) {
    board.push([]);
    for (let j = 0; j < 15; j++)
      board[i].push('');
  }
  return board;
}

function checkWinner(board, color) {
  console.log(board);
  console.log(color);
  for (let i = 0; i < 15; i++)
    for (let j = 0; j < 15; j++) {
      //lijeva polovina
      if (j < 4) {
        //gornjiu lijevi
        if (i < 11) {
          if (checkVertical(board, color, i, j))
            return true;
          if (checkHorizontal(board, color, i, j))
            return true;
          if (checkDiagRight(board, color, i, j))
            return true;
        } //donji lijevi
        else if (i > 10) {
          if (checkHorizontal(board, color, i, j))
            return true;
        }
      } else if (j > 10) {
        //gornjiu desni
        if (i < 11) {
          if (checkVertical(board, color, i, j))
            return true;
          if (checkDiagLeft(board, color, i, j))
            return true;
        }
        //srednji dio
      } else {
        //gornjiu
        if (i < 11) {
          if (checkVertical(board, color, i, j))
            return true;
          if (checkHorizontal(board, color, i, j))
            return true;
          if (checkDiagRight(board, color, i, j))
            return true;
          if (checkDiagLeft(board, color, i, j))
            return true;
        } //donji
        else if (i > 10) {
          if (checkHorizontal(board, color, i, j))
            return true;
        }
      }
    }
  return false;
}

function checkVertical(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row + i][col] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}

function checkHorizontal(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row][col + i] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}

function checkDiagRight(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row + i][col + i] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}

function checkDiagLeft(board, color, row, col) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    if (board[row + i][col - i] === color) {
      counter++;
    }
  }
  if (counter === 5)
    return true;
  return false;
}