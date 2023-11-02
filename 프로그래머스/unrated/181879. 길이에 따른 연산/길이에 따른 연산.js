function solution(nums) {
    return nums.reduce((a, c) => nums.length >= 11 ? a + c : a * c);
}