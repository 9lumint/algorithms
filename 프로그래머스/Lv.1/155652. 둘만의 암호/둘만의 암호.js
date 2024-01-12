function solution(s, skip, index) {
  return [...s]
    .map((e) => {
      let i = 0;
      while (i < index) {
        let newLetter = String.fromCharCode(
          e.charCodeAt(0) + 1 - (e.charCodeAt(0) + 1 > 122 ? 26 : 0)
        );
        if (!skip.includes(newLetter)) {
          i++;
        }
        e = newLetter;
      }
      return e;
    })
    .join("");
}