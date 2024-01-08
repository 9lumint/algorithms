function solution(k, score) {
  let answer = [];
  return score.reduce((a, c) => {
      answer.push(c);
      answer = answer.sort((a, b) => b - a).slice(0, k);
      return [...a, Math.min(...answer)];
  }, []);
}