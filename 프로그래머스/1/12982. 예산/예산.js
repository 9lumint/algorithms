function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (answer + d[i] > budget) {
      return i;
    } else if (answer + d[i] === budget) {
      return i + 1;
    }
    answer += d[i];
  }
  return d.length;
}