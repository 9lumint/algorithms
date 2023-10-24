function solution(array) {
    let max = [...array].sort((a, b) => b - a)[0]
    return [max, array.indexOf(max)];
}