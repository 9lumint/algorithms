function solution(a, b, c) {
    let sum1 = a + b + c, sum2 = a * a + b * b + c * c, sum3 = a ** 3 + b ** 3 + c ** 3;
    if((a !== b && b !== c) && a !== c){
        return sum1;
    } else if(a === b && b === c){
        return sum1 * sum2 * sum3;
    } else {
        return sum1 * sum2;
    }
}