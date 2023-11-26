function solution(i, j, k) {
  return Array(j - i + 1)
    .fill(0)
    .reduce((a, _, idx) => {
      let ans = 0;
      for (let n = 0; n < String(i + idx).length; n++) {
        String(i + idx)[n] === String(k) ? ans++ : null;
      }
      return ans + a;
    }, 0);
}