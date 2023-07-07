function solution(k, tangerine) {
  const arr = [0];
  let count = 0;
  for (let i = 0; i < tangerine.length; i++) {
    arr[tangerine[i]] = (arr[tangerine[i]] || 0) + 1;
  }
  arr.sort((a, b) => b - a);
  for (let j = 0, sum = 0; j < arr.length; j++) {
    sum += arr[j];
    count++;
    if (k <= sum) {
      return count;
    }
  }
}
