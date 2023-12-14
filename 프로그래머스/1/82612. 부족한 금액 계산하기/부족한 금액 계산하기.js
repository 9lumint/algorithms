function solution(price, money, count) {
    let cost = price * (1 + count) * count / 2;
    return money >= cost ? 0 : cost - money; 
}