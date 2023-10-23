function solution(n, k) {
    const answer = [];
    let i = 1;
    while(k * i <= n){
        answer[i - 1] = k * i;
        i++;
    }
    return answer;
}