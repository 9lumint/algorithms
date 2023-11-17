function solution(dots) {
  const [start, ...rest] = dots;
  for (let i = 0; i < rest.length; i++) {
    let [a, b] = rest.filter((_, idx) => idx !== i);
    if (
      (start[0] - rest[i][0]) / (start[1] - rest[i][1]) ===
      (a[0] - b[0]) / (a[1] - b[1])
    ) {
      return 1;
    }
  }
  return 0;
}