function solution(str, indices) {
    let ans = '';
    for(let i = 0; i < str.length; i++){
        indices.includes(i) ? null : ans += str[i];
    }
    return ans;
}