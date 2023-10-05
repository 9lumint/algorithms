function solution(angle) {
    if(!(angle % 90)){
        return angle / 45;
    } 
    return angle < 90 ? 1 : 3;
}