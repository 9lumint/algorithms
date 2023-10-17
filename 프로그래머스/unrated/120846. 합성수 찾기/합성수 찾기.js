function solution(n) {
    let answer = 0;
    for(let num = 4; num <= n; num++){
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(!(num % i)){
                answer++;
                break;
            }
        }
    }
    return answer;
}