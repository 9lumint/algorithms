function solution(a, b, c) {
    if(a === b && b === c){
        return 27 * (a ** 6);
    } else if((a !== b && b !== c) && a !== c){
        return a + b + c;
    } else {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    }
}