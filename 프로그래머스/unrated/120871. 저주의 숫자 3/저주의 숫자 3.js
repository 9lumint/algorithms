function solution(n) {
  let realNum = 1, fakeNum = 1;
  while (realNum !== n) {
    realNum++;
    fakeNum++;
    while (!(fakeNum % 3) || String(fakeNum).includes("3")) {
      fakeNum++;
    }
  }
  return fakeNum;
}