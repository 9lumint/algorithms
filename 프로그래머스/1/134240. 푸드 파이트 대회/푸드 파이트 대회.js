function solution(food) {
  const answer = [];
  let cal = 0;
  for (let i = 0; i < food.length; i++) {
    if (food[i] > 1) {
      let k = 1;
      while (k <= Math.floor(food[i] / 2)) {
        answer.push(cal);
        k++;
      }
    }
    cal++;
  }
  return answer.join("") + "0" + answer.reverse().join("");
}