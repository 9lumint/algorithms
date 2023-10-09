function solution(n) {
    let answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        !(n % i) ? n / i !== i ? answer += 2 : answer++ : null;
    }
    return answer;
}