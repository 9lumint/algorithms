function solution(X, Y) {
  X = [...X].sort();
  Y = [...Y].sort();
  const answer = [];

  while (X.length && Y.length) {
    if (X.slice(-1)[0] === Y.slice(-1)[0]) {
      answer.push(X.pop());
      Y.pop();
    } else {
      X.slice(-1)[0] > Y.slice(-1)[0] ? X.pop() : Y.pop();
    }
  }
  return answer.length ? answer[0] === "0" ? "0" : answer.join("") : "-1";
}