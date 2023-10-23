function solution(s) {
  const arr = [...s].sort();
  let answer = "",
    i = 0;
  while (i < arr.length) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      answer += arr[i];
      i++;
    } else {
      i = arr.lastIndexOf(arr[i]) + 1;
    }
  }
  return answer;
}