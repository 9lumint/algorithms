function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 1; k < nums.length - 1; k++) {
      for (let j = k + 1; j < nums.length; j++) {
        answer.push(nums[i] + nums[k] + nums[j]);
      }
    }
  }

  return answer.filter((e) => {
    for (let i = 2; i <= Math.sqrt(e); i++) {
      if (!(e % i)) {
        return false;
      }
    }
    return true;
  }).length;
}