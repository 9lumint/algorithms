function solution(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (Math.floor(n / i) === Math.sqrt(n)) {
      return 1;
    }
  }
  return 2;
}
