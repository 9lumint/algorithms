function solution(hp) {
    let g = parseInt(hp / 5),
        s = parseInt((hp - g * 5) / 3),
        a = hp - g * 5 - s * 3;
    return g + s + a;
}