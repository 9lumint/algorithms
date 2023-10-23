function solution(my_string) {
  const answer = new Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    answer[
      my_string.charCodeAt(i) -
        (my_string[i].toLowerCase() === my_string[i] ? 71 : 65)
    ]++;
  }
  return answer;
}