function even(num, x = 0) {
  return num < 50 ? (num % 2 ? odd(num, x) : x) : even(Math.floor(num / 2), x + 1);
}

function odd(num, x = 0) {
  return num > 50 ? x : odd(num * 2 + 1, x + 1);
}

function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && !(arr[i] % 2)) {
      answer = Math.max(answer, even(arr[i]));
    } else if (arr[i] < 50 && arr[i] % 2) {
      answer = Math.max(answer, odd(arr[i]));
    }
  }
  return answer;
}