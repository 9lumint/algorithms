function solution(num_list, n) {
  const answer = Array.from(
    { length: parseInt(num_list.length / n) },
    () => []
  );
  for (let i = 0; i < num_list.length; i++) {
    answer[parseInt(i / n)].push(num_list[i]);
  }
  return answer;
}