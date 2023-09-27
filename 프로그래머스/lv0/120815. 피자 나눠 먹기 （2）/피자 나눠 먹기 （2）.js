function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b);
}

function solution(n) {
    let a, b;
    if(n > 6){
        a = n, b = 6;
    } else {
        a = 6, b = n;
    }
    return Math.floor((a * b / gcd(a, b)) / 6); 
}