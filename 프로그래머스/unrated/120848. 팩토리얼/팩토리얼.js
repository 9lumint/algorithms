function solution(n) {
    let f = 1, num = 1;
    while(f <= n){
        f *= ++num;
    }
    return --num;
}