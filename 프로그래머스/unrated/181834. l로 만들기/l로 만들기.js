function solution(myString) {
  return [...myString]
    .map((el, idx) => (myString.charCodeAt(idx) < "l".charCodeAt(0) ? "l" : el))
    .join("");
}