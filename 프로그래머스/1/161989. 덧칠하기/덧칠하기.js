function solution(n, m, section) {
    let stack = [], answer = 0;
    for(let i = 0; i < section.length; i++){
        if(!stack.length || section[i] - stack[0] <= m - 1){
            stack.push(section[i]);
        } else if(section[i] - stack[0] > m - 1){
            answer++;
            stack = [section[i]];
        }
    }
    return answer + 1;
}
