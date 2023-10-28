function solution(names) {
    const answer = [];
    while(names.length > 0){
        answer.push(names[0]);
        names.splice(0, 5);
    }
    return answer;
}