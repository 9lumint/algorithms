function solution(keyinput, board) {
  let a = 0,
    b = 0;
  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "up":
        Math.floor(board[1] / 2) < Math.abs(b + 1) ? Math.floor(board[1] / 2) : b++;
        break;
      case "down":
        Math.floor(board[1] / 2) < Math.abs(b - 1) ? Math.floor(-board[1] / 2) : b--;
        break;
      case "right":
        Math.floor(board[0] / 2) < Math.abs(a + 1) ? Math.floor(board[0] / 2) : a++;
        break;
      case "left":
        Math.floor(board[0] / 2) < Math.abs(a - 1) ? Math.floor(-board[0] / 2) : a--;
        break;
    }
  }
  return [a, b];
}