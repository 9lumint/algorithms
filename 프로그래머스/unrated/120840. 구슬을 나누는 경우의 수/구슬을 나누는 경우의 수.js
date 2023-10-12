function solution(balls, share) {
    let b = 1, s = 1;
    while(share > 0){
        b *= balls;
        s *= share;
        balls--;
        share--;
    }
    return parseInt(b / s);
}