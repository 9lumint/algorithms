function solution(babbling) {
  const filter = ["aya", "ye", "woo", "ma"];
  return babbling.filter((el) => {
    let word = "", length = el.length;
    for (let i = 0; i < el.length; i++) {
      word += el[i];
      if (filter.includes(word)) {
        length -= word.length;
        word = "";
      }
    }
    return !length;
  }).length;
}