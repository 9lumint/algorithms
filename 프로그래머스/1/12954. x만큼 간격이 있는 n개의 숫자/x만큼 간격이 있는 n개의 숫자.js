function solution(x, n) {
    return Array(n).fill(x).map((e, i) => e + e * i);
}