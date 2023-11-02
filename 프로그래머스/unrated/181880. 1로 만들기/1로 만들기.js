function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== 1) {
      nums[i] = nums[i] % 2 ? (nums[i] - 1) / 2 : nums[i] / 2;
      answer++;
    }
  }
  return answer;
}