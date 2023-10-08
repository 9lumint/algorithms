function solution(age) {
    return [...age + ''].map((el) => (String.fromCharCode(+el + +97))).join('');
}