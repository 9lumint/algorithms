function solution(score) {
    const arg = score.map(el => (el[0] + el[1]) / 2);
    const rank = [...arg].sort((a, b) => b - a);
    return arg.map(el => rank.indexOf(el) + 1);
}