function solution(arr) {
    const stk = [];
    for(let i = 0; i < arr.length; i++){
        stk[stk.length - 1] === arr[i] ? stk.splice(-1) : stk.push(arr[i]);
    }
    return stk.length ? stk : [-1];
}