function solution(keyinput, board) {
  let a = 0,
    b = 0;
  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "up":
        board[1] / 2 >= b + 1 ? b++ : b;
        break;
      case "down":
        board[1] / 2 >= -b + 1 ? b-- : b;
        break;
      case "right":
        board[0] / 2 >= a + 1 ? a++ : a;
        break;
      case "left":
        board[0] / 2 >= -a + 1 ? a-- : a;
        break;
    }
  }
  return [a, b];
}