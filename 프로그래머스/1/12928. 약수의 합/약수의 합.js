function solution(n) {
    let answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(i === Math.sqrt(n)){
            answer += i;
        } else if(!(n % i)){
            answer += (i + (n / i));
        }
    }
    return answer;
}