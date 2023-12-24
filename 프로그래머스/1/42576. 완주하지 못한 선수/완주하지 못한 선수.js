function solution(participant, completion) {
  participant.sort();
  completion.sort();
  while (completion.length > 0) {
    if (
      participant[participant.length - 1] !== completion[completion.length - 1]
    ) {
      return participant[participant.length - 1];
    }
    participant.pop();
    completion.pop();
  }
  return participant[0];
}