function solution(num_list) {
    const answer = [0, 0];
    for(let i = 0; i < num_list.length; i++){
        answer[num_list[i] % 2] += 1; 
    }
    return answer;
}