function solution(ing) {
    let answer = 0, stack = [];
    for(let i = 0; i < ing.length; i++){
        stack.push(ing[i]);
        
        if(stack.slice(-4).join("") === '1231'){
            answer++;
            stack.splice(-4);
        }
    }
    return answer;
}