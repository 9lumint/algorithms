function solution(k, m, score) {
    score.sort((a, b) => b - a);
    return score.reduce((a, c, i) => (!((i + 1) % m) ? c * m : 0) + a, 0);
}