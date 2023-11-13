function solution(board, k) {
  return board.reduce(
    (acc, cur, idx) =>
      cur.reduce((a, c, i) => (i + idx <= k ? a + c : a), 0) + acc,
    0
  );
}