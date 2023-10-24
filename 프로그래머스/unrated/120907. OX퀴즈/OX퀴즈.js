function solution(quiz) {
  return quiz.map((el) => {
    const cal = el.split(" ");
    cal[2] *= cal[1] === "-" ? -1 : 1;
    return +cal[0] + cal[2] === +cal[4] ? "O" : "X";
  });
}