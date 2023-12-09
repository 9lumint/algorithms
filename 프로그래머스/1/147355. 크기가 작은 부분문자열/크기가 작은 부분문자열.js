function solution(t, p) {
  let answer = 0;
  for (let i = 0, k = p.length; k <= t.length; i++, k++) {
    if (+t.slice(i, k) <= +p) {
      answer++;
    }
  }
  return answer;
}