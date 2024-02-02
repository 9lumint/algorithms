function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  for (let i = people.length - 1; count < i; i--) {
    people[i] + people[count] <= limit ? count++ : null;
  }
  return people.length - count;
}