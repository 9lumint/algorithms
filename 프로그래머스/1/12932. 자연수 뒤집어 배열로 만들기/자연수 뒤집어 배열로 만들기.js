function solution(n) {
  const answer = [];
  const str = [...String(n)];
  while (str.length > 0) {
    answer.push(+str.pop());
  }
  return answer;
}