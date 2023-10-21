function solution(n) {
  const answer = [];
  let i = 2;
  while (i <= n) {
    if (!(n % i)) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return [...new Set(answer)];
}