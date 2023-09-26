function solution(n) {
    const answer = [];
    let num = n % 2 ? n : n - 1;
    for(let i = 1; num >= i; i += 2){
        answer.push(i);
    }
    return answer;
}