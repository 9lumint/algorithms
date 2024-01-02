function solution(n, m, section) {
    let painted = 0, answer = 0;
    for(let i = 0; i < section.length; i++){
        if(painted < section[i]){
            painted = section[i] + m - 1;
            answer++;
        }
    }
    return answer;
}