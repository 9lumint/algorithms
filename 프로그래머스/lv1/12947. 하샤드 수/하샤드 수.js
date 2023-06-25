// 1. 인자 x의 각 자릿수의 합을 구하기 위해 문자열로 변환 후 split을 이용해 배열화한다. 
// 2. 각 배열의 요소의 합을 구한 후 x와 나누어 나머지를 확인한다.
// 3. 나누어 떨어진다면 true를 아니면 false를 반환한다. 

function solution(x) {
    return x % String(x).split('').reduce((a, c) => +a + +c) ? false : true;
}