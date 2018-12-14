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