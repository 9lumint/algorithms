function solution(dots) {
    const arr = dots.filter((_, idx) => dots[idx][0] !== dots[0][0] && dots[idx][1] !== dots[0][1]);
    return Math.abs((arr[0][0] - dots[0][0]) * (arr[0][1] - dots[0][1]));
}