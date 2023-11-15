function solution(sides) {
  sides.sort((a, b) => a - b);
  let answer = 0, i = 0;
  while (i < sides[0] + sides[1]) {
    if ((i <= sides[1] && i + sides[0] > sides[1]) || sides[1] < i) {
      answer++;
    }
    i++;
  }
  return answer;
}