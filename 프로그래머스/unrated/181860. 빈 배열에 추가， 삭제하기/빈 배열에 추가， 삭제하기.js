function solution(arr, flag) {
    return arr.reduce((a, c, i) => flag[i] ? [...a, ...Array(c * 2).fill(c)] : a.splice(0, a.length - c), []);
}