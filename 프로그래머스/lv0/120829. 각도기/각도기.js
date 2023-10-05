function solution(angle) {
    return !(angle % 90) ? angle / 45 : angle < 90 ? 1 : 3;
}