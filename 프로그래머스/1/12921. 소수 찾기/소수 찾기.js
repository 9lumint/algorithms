function solution(n) {
  const num = Array(n + 1).fill(true);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (num[i]) {
      for (let k = i ** 2; k <= n; k += i) {
        num[k] = false;
      }
    }
  }
  return num.filter(e => e).length - 2;
}