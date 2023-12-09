function solution(n){
    return [...String(n)].reduce((a, c) => a + +c, 0)
}