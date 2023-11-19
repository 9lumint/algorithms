function solution(lines) {
  lines.sort((a, b) => a[0] - b[0]);
  let answer = [];
  for (let i = 0; i < 3; i++) {
    for (let k = i + 1; k < 3; k++) {
      let [a, b] =
        lines[i][1] > lines[k][0]
          ? [
              lines[k][0],
              lines[i][1] >= lines[k][1] ? lines[k][1] : lines[i][1],
            ]
          : [0, 0];
      if (a - b !== 0) {
        answer = [
          ...answer,
          ...Array(b - a)
            .fill(0)
            .map((_, i) => i + a),
        ];
      }
    }
  }
  return new Set(answer).size;
}