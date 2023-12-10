function solution(n, i = 1) {
    let answer = '';
    while(i <= n){
        answer += i % 2 ? "수" : "박";
        i++;
    }
    return answer;
}