function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function solution(a, b) {
  let ans = Math.floor(b / gcd(b, a)), num = 2;
  const answer = [];
  while (num <= ans) {
    if (!(ans % num)) {
      answer.push(num);
      ans /= num;
    } else {
      num++;
    }
  }
  return [...new Set(answer)].filter((el) => el !== 2 && el !== 5).length
    ? 2
    : 1;
}