function solution(arr, divisor) {
    const answer = arr.filter(e => !(e % divisor));
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}