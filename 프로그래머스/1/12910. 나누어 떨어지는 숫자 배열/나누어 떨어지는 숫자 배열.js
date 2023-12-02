function solution(arr, divisor) {
    const answer = arr.sort((a, b) => a - b).filter(e => !(e % divisor));
    return answer.length ? answer : [-1];
}