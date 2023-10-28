function solution(my_str, n) {
    const answer = [];
    const str = my_str.split("");
    while(str.length > 0){
        answer.push(str.splice(0, n).join(""));
    }
    return answer;
}