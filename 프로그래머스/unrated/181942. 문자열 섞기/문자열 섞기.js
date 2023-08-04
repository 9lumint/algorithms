function solution(str1, str2) {
    let answer = '';
    for(let i = 0, j = 0; i < str1.length * 2; i++){
        if(i % 2){
            answer += str2[j];
            j++;
        } else {
            answer += str1[j];
        }
    }
    return answer;
}