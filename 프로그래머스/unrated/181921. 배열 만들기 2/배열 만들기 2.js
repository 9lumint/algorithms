function solution(l, r) {
    const answer = [];
    for(let num = l; num <= r; num++){
        const strArr = [...('' + num)];
        let push = true;
        for(let i = 0; i < strArr.length; i++){
            if(strArr[i] !== '0' && strArr[i] !== '5'){
                push = false;
                break;
            }
        }
        push ? answer.push(num) : null;
    }
    return answer.length ? answer : [-1];
}