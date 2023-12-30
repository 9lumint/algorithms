function solution(s) {
  let count1 = 1, count2 = 0, i = 1, words = 0;
  while (s.length) {
    if (s.length === 1 || !s[i + 1]) {
      return ++words;
    }

    s[0] === s[i] ? count1++ : count2++;
    if (count1 === count2) {
      words++;
      s = s.slice(i + 1), count1 = 1, count2 = 0, i = 1;
    } else {
      i++;
    }
  }
  return words;
}