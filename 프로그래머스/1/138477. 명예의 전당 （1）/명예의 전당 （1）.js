function solution(k, score) {
  const answer = [];
  const list = [];
  for (let i = 0; i < score.length; i++) {
    list.push(score[i]);
    list.sort((a, b) => b - a);
    list.length > k ? list.splice(-1) : null;
    answer.push(list.slice(-1)[0]);
  }
  return answer;
}