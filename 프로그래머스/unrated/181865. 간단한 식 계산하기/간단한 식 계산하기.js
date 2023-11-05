function solution(b) {
    let [n1, oper, n2] = b.split(" ");
    switch(oper){
        case "+" : return +n1 + +n2;
        case "-" : return +n1 - +n2;
        case "*" : return +n1 * +n2;
    }
}