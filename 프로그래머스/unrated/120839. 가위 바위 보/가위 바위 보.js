function solution(rsp) {
    const winner = {"2" : "0", "0" : "5", "5" : "2"};
    return rsp.split('').reduce((a, c) => a + winner[c], '');
}