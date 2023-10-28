function solution(s) {
  for (let el of s) {
    if (el === "l") {
      return s.slice(0, s.indexOf(el));
    } else if (el === "r") {
      return s.slice(s.indexOf(el) + 1);
    }
  }
  return [];
}