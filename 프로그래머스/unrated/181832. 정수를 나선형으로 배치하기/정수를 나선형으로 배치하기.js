function solution(n) {
  const answer = Array.from({ length: n }, () => []);
  let s = 0, e = n - 1, p1 = 0, p2 = 0, control = "right";
  for (let i = 1; i <= n ** 2; i++) {
    answer[p1][p2] = i;
    switch (control) {
      case "right":
        p2++;
        if (p2 === e) {
          control = "down";
        }
        break;
      case "down":
        p1++;
        if (p1 === e) {
          control = "left";
          e--;
        }
        break;
      case "left":
        p2--;
        if (p2 === s) {
          control = "up";
          s++;
        }
        break;
      case "up":
        p1--;
        if (p1 === s) {
          control = "right";
        }
        break;
    }
  }
  return answer;
}