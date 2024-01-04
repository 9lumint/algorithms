function solution(number, limit, power) {
  let answer = 1;
  for (let i = 1; i < number; i++) {
    let n = 0;
    for (let k = 1; k <= Math.sqrt(i + 1); k++) {
      if (k === Math.sqrt(i + 1)) {
        n++;
      } else if (!((i + 1) % k)) {
        n += 2;
      }
    }
    answer += n > limit ? power : n;
  }
  return answer;
}