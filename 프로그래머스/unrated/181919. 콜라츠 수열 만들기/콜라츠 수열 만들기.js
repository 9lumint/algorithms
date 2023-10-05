function solution(n) {
    const answer = [n];
    let last = answer.length - 1
    while(answer[last] !== 1){
        answer[last + 1] = answer[last] % 2 ? 3 * answer[last] + 1 : Math.floor(answer[last] / 2);
        last++;
    }
    return answer;
}