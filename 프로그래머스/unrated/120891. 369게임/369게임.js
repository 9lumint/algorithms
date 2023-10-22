function solution(order) {
    return [...String(order)].reduce((a, c) => !(+c % 3) && +c !== 0 ? a + 1 : a, 0);
}