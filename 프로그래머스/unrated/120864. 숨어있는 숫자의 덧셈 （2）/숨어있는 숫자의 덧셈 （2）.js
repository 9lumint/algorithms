function solution(s) {
  let answer = 0, memo = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(+s[i]) && memo.length) {
      answer += +memo;
      memo = "";
    } else if (!isNaN(+s[i])) {
      memo += s[i];
    }
  }
  return memo.length ? answer + +memo : answer;
}