function solution(n) {
  const answer = [];
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (!(n % i)) {
      for (let k = 2; k <= Math.sqrt(i); k++) {
        if (!(i % k)) {
          count++;
          break;
        }
      }
      count ? (count = 0) : answer.push(i);
    }
  }
  return answer;
}