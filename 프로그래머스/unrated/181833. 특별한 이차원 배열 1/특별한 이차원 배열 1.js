function solution(n) {
  const answer = Array(n)
    .fill(0)
    .map((el) => Array(n).fill(0));
  return answer.map((el, idx) => {
    el[idx] = 1;
    return el;
  });
}
