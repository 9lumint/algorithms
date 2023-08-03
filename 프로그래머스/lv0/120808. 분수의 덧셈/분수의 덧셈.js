const gcd = (a, b) => {
    if(!b){
        return a;
    }
    return a > b ? gcd(b, a % b) : gcd(a, b % a)
}

function solution(numer1, denom1, numer2, denom2) {
    let x = numer1 * denom2 + numer2 * denom1,
    y = denom1 * denom2, 
    z = gcd(x, y);
    
    return [x / z, y / z];
}