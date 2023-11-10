function solution(myString) {
  return [...myString]
    .map((el) => el < "l" ? "l" : el)
    .join("");
}