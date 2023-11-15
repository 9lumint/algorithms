function solution(board) {
  const checkBoard = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  let dangerArea = 0;
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[0].length; k++) {
      if (board[i][k] === 1) {
        dangerArea++;
        checkBoard.forEach((el) => {
          if (i + el[0] >= 0 && k + el[1] >= 0 && i + el[0] < board.length && k + el[1] < board[0].length) {
            if (board[i + el[0]][k + el[1]] === 0) {
              dangerArea++;
              board[i + el[0]][k + el[1]] = 2;
            }
          }
        });
      }
    }
  }
  return board.length * board[0].length - dangerArea;
}