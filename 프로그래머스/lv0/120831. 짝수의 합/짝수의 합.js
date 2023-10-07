function solution(n) {
    let answer = 0;
    while(n > 0){
        n % 2 ? null : answer += n;
        n--;
    }
    return answer;
}