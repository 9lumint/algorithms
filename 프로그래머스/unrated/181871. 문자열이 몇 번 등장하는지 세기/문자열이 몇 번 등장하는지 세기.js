function solution(myString, pat) {
    let idx = myString.indexOf(pat), answer = 0;
    while(myString.indexOf(pat, idx) !== -1){
        answer++;
        idx = myString.indexOf(pat, idx) + 1;
    }
    return answer;
}