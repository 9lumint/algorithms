function solution(picture, k) {
  const answer = [];
  const pictures = picture.map((el) => {
    let str = "";
    for (let i = 0; i < el.length; i++) {
      str += el[i].repeat(k);
    }
    return str;
  });
  for (let i = 0; i < pictures.length; i++) {
    for (let j = 1; j <= k; j++) {
      answer.push(pictures[i]);
    }
  }
  return answer;
}