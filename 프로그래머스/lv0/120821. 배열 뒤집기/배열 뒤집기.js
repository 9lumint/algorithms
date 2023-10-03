function solution(num_list) {
    const answer = [];
    let idx = num_list.length - 1;
    while(idx >= 0){
        answer.push(num_list[idx]);
        idx--;
    }
    return answer;
}