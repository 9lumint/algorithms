function solution(A, B) {
  let str = A, ans = 0;
  while (true) {
    if (str === B) {
      return ans;
    } else if (str === A && ans > 0) {
      return -1;
    }
    str = str.slice(-1) + str.slice(0, -1);
    ans++;
  }
}