function solution(absolutes, signs) {
    return absolutes.map((el, idx) => signs[idx] ? el : -el).reduce((a, c) => a + c);
}