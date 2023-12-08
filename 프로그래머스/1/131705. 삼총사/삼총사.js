function solution(num) {
  let answer = 0;
  for (let i = 0; i < num.length - 2; i++) {
    for (let k = i + 1; k < num.length - 1; k++) {
      for (let j = k + 1; j < num.length; j++) {
        if (!(num[i] + num[k] + num[j])) {
          answer++;
        }
      }
    }
  }
  return answer;
}
