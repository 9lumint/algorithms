function solution(n) {
    const answer = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(!(n % i) && i !== Math.sqrt(n)){
            answer.push(i, n / i);
        } else if (i === Math.sqrt(n)){
            answer.push(i);
        }
    }
    return answer.sort((a, b) => a - b);
}